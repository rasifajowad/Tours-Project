import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState([]);

  const removeTours = (id) => {
    const newTours = state.filter((state) => state.id !== id);
    setState(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setState(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (state.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left To Show</h2>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            type="button"
            onClick={() => fetchTours()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={state} removeTours={removeTours} />
    </main>
  );
};
export default App;
