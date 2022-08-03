import { useContext } from "react";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="text-center mt-5">
        <h1>Hello, home here!!!</h1>
        <div className="alert alert-info">
          {store.message ||
            "Loading message from the backend (make sure your python backend is running)..."}
        </div>
      </div>
    </>
  );
};

export default Home;
