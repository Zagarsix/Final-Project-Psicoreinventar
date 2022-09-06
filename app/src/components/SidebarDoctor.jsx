import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

const SidebarDoctor = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);

  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
        style={{ color: "#8dc2fe" }}
      >
        <span className="fs-5 d-none d-sm-inline">Dashboard</span>
      </a>
      <ul
        className="nav nav-pills flex-column mb-5 align-items-center align-items-sm-start"
        id="menu"
      >
        <li className="nav-item">
          <Link to="/profile" className="nav-link align-middle px-0">
            <i className="fa-solid fa-user" style={{ color: "#8dc2fe" }} />{" "}
            <span className="ms-1 d-none d-sm-inline text-white">Mi perfil</span>
          </Link>
        </li>
        <li className="w-100">
          <Link to="/doctores" className="nav-link px-0">
            <i className="fa-solid fa-user-doctor" style={{ color: "#8dc2fe" }}></i>{" "}
            <span className="d-none d-sm-inline text-white">Doctor</span>{" "}
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown pb-4">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={store.currentUser?.user?.image || "http://placekitten.com/200/300"}
            alt="hugenerd"
            width={30}
            height={30}
            className="rounded-circle"
          />
          <span className="d-none d-sm-inline mx-1">{store.currentUser?.user?.name}</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={actions.handleLogout}>
              Salir
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarDoctor;
