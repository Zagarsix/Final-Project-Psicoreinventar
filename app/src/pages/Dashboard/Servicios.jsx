import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Sidebar from "../../components/Sidebar";
import SidebarDoctor from "../../components/SidebarDoctor";
import SidebarClient from "../../components/SidebarClient";
import { useNavigate } from "react-router-dom";

const Servicios = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            {store.currentUser?.user?.role_id === 1 && <Sidebar />}
            {store.currentUser?.user?.role_id === 2 && <SidebarDoctor />}
            {store.currentUser?.user?.role_id === 3 && <SidebarClient />}
          </div>
          <div className="col py-3">
            {/* inicio contenido */}

            <h1> asd</h1>
            {/* fin contenido */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
