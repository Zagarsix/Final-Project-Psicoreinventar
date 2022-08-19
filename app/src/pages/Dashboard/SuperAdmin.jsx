import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Sidebar from "../../components/Sidebar";
import SidebarClient from "../../components/SidebarClient";
import SidebarDoctor from "../../components/SidebarDoctor";
import TabSuperAdmin from "../../components/TabSuperAdmin";
import { useNavigate } from "react-router-dom";

const SuperAdmin = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          {store.currentUser?.user?.role_id === 1 && <Sidebar />}
          {store.currentUser?.user?.role_id === 2 && <SidebarDoctor />}
          {store.currentUser?.user?.role_id === 3 && <SidebarClient />}
        </div>
        <div className="col py-3">
          {/*inicio contenido*/}
          <div
            className="container text-center text-white"
            style={{
              fontFamily: "monospace",
            }}
          >
            <div
              className="p-5 mb-4 rounded-3"
              style={{ color: "#8dc2fe", backgroundColor: "black" }}
            >
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">
                  Bienvenido(a), {store.currentUser?.user?.name} {""}{" "}
                  {store.currentUser?.user?.lastname}
                </h1>
              </div>
            </div>
          </div>

          <TabSuperAdmin />

          {/*fin contenido*/}
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
