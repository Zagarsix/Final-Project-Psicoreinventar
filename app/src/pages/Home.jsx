import { useContext } from "react";
import { Context } from "../store/appContext";
import Header from "../components/Header";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Header
        title="Project"
        title_highlight="Incoming"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias atque itaque illo enim quidem at ad voluptatibus,
        nesciunt quia alias optio debitis quam suscipit, quod animi
        delectus veritatis! Saepe, maxime."
        btnLabel="Agenda una cita"
        img="https://uploads-ssl.webflow.com/6165ed3d14364c7f8297fe2e/6255ce36e7efb7be217ba6c3_woman-laptop-couch.png"
        imgLabel="Doctor"
      />
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
