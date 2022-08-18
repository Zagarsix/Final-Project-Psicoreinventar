import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DashboardClient = () => {
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
          <SidebarClient />
        </div>
        <div className="col py-3">
          {/* inicio contenido */}

          <div
            className="p-5 mb-4 rounded-3"
            style={{ color: "#0d6efd", backgroundColor: "#e0e4e6" }}
          >
            <div className="container-fluid py-5">
              <img className="cover" src=""></img>
              <h1 className="display-5 fw-bold" style={{ float: "inline-end" }}>
                Dashboard
              </h1>
            </div>
          </div>

          {/* fin contenido */}
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
