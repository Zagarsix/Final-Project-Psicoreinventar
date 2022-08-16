import { Link } from "react-router-dom";

const Sidebar = () => {
    return (

        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"
                style={{color:"#8dc2fe"}}>
                <span className="fs-5 d-none d-sm-inline">Dashboard</span>
            </a>
            <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
            >
                <li className="nav-item">
                    <Link to="/profile" className="nav-link align-middle px-0">
                        <i className="fa-solid fa-user" style={{color:"#8dc2fe"}}/>{" "}
                        <span className="ms-1 d-none d-sm-inline text-white">Mi perfil</span>
                    </Link>
                </li>
                <li>
                    <a
                        href="#submenu1"
                        data-bs-toggle="collapse"
                        className="nav-link px-0 align-middle"
                    >
                        <i className="fa-solid fa-users" style={{color:"#0d6efd"}} />{" "}
                        <span className="ms-1 d-none d-sm-inline text-white">Roles</span>{" "}
                    </a>
                    <ul
                        className="collapse show nav flex-column ms-1"
                        id="submenu1"
                        data-bs-parent="#menu"
                    >
                        <li>
                            <Link to="/admin" className="nav-link px-0">
                            <i className="fa-solid fa-crown" style={{color:"#8dc2fe"}}></i>{" "}
                                <span className="d-none d-sm-inline text-white">Admin</span> {" "}
                            </Link>
                        </li>
                        <li className="w-100">
                            <Link to="/doctores" className="nav-link px-0">
                            <i className="fa-solid fa-user-doctor" style={{color:"#8dc2fe"}}></i>{" "}
                                <span className="d-none d-sm-inline text-white">Doctores</span>{" "}
                            </Link>
                        </li>
                        <li>
                            <Link to="/pacientes" className="nav-link px-0">
                            <i className="fa-solid fa-hospital-user" style={{color:"#8dc2fe"}}></i> {" "}
                                <span className="d-none d-sm-inline text-white">Pacientes</span> {" "}
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                
                <li>
                    <Link to="/servicios" className="nav-link px-0 align-middle">
                        <i className="fa-solid fa-bookmark" style={{color:"#8dc2fe"}} />{" "}
                        <span className="ms-1 d-none d-sm-inline text-white">Servicios</span>{" "}
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
                        src="http://placekitten.com/200/300"
                        alt="hugenerd"
                        width={30}
                        height={30}
                        className="rounded-circle"
                    />
                    <span className="d-none d-sm-inline mx-1">Usuario</span>
                </a>
                <ul
                    className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1"
                >

                    
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Salir
                        </a>
                    </li>
                </ul>
            </div>
        </div>



    );
};

export default Sidebar