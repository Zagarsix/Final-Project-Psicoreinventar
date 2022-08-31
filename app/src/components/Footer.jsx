import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer bgColor='#ffffff'>
            <section className=' justify-content-center  '>
                <div className='container-fluid text-md-start text-center mt-5'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 mx-auto mb-1' style={{}}>
                            {/*Imagen*/}
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
                            <div className="container pt-4 pb-4">

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

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2  mx-auto">
                            <Link
                                className="col-10 col-sm-10 col-md-6 col-lg-10 btn btn-primary btn-md appointment-btn mb-4"
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