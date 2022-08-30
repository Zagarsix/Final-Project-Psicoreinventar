import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer bgColor='#ffffff'>
            <section className='d-flex justify-content-center  '>
                <div className='container text-center text-md-start mt-5'>
                    <div className=' row d-flex'>
                        <div className='col-sm-12 col-md-6 mx-auto mb-1' style={{}}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAAoCAYAAABD/E7rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZmU0NDQ2Zi03YTVjLTBlNGYtYmYzMy0zOTU5YjZiNWU3NTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjEzNzc0RDkxREM5MTFFRDhENkY4QUNDRUNERTAyNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjEzNzc0RDgxREM5MTFFRDhENkY4QUNDRUNERTAyNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDA2MTMxN2EtOWViNS1kMDRiLTkwNTktOTI1NDJhNjcxODViIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzZkZTNhNWMtN2I0MS0zMzQ1LWE3MTEt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"></img>
                            <p className="p-2" style={{ fontSize: "0.8rem" }}>
                                En caso de emergencia, por favor utiliza alguno de estos recursos en vez de este sitio.
                            </p>
                            <div className="container">
                                <a style={{ fontSize: "0.7rem", color: "#000000" }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link  link-gray me-2 active-link"
                                            : "nav-link  link-gray me-2"
                                    }
                                    href="https://www.gob.cl/saludablemente/"
                                >
                                    Saludable Mente
                                </a>
                                <div className="container"></div>
                                <a style={{ fontSize: "0.7rem", color: "#000000" }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link  link-gray me-2 active-link"
                                            : "nav-link  link-gray me-2"
                                    }
                                    href="http://asistenciaalsuicida.com/telefono-de-la-esperanza-chile/"
                                >
                                    Teléfono de la Esperanza
                                </a>

                            </div>
                            <div className="container pt-4 pb-4" style={{ justifyContent: "left" }}>

                                <a href='#' className='me-3 text-reset'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href='#' className='me-3 text-reset'>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href='#' className='me-3 text-reset'>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href='https://github.com/samuelpalaciosdev/final-project' className=' me-1 text-reset'>
                                    <i className="fa-brands fa-github"></i>
                                </a>

                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2 pe-0 mb-4 mx-auto">
                            <Link
                                className="col-10 col-sm-10 col-md-10 col-lg-10 btn btn-primary btn-md appointment-btn mb-4"
                                style={{ padding: ".5em 2em", fontSize: "0.7rem" }}
                                to="/appointment"
                            >
                                Agendar cita
                            </Link>
                            <p>
                                <NavLink style={{ fontSize: "0.6rem" }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link fw-semibold link-gray me-2 active-link"
                                            : "nav-link fw-semibold link-gray me-2"
                                    }
                                    to="/specialists"
                                >
                                    Nuestros especialistas
                                </NavLink>
                            </p>
                            <p>
                                <NavLink style={{ fontSize: "0.6rem" }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link fw-semibold link-gray me-2 active-link"
                                            : "nav-link fw-semibold link-gray me-2"
                                    }
                                    to="/register"
                                >
                                    Regístrate
                                </NavLink>
                            </p>
                            <p>
                                <NavLink style={{ fontSize: "0.6rem" }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link fw-semibold link-gray me-2 active-link"
                                            : "nav-link fw-semibold link-gray me-2"
                                    }
                                    aria-current="page"
                                    to="/profile"
                                >
                                    Inicia sesión
                                </NavLink>
                            </p>
                            <p>
                                <NavLink style={{ fontSize: "0.6rem" }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link fw-semibold link-gray me-2 active-link"
                                            : "nav-link fw-semibold link-gray me-2"
                                    }
                                    to="/contact"
                                >
                                    Contáctanos
                                </NavLink>
                            </p>
                        </div>

                    </div>
                </div>
            </section>



            <div className='d-flex justify-content-center p-2 pt-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: "#0d6efd", fontSize: "0.8rem", textAlign: "center" }}>


                <p className="" style={{ color: "black", fontSize: "0.7rem" }}>© Developed by</p>

                <p className="ps-2" style={{ fontSize: "0.7rem" }}>Team <i className="fa-solid fa-spa"></i> Hope</p>

            </div>


        </footer >


    );
};


export default Footer;