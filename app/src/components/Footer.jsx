import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer bgColor='#ffffff'>
            <div className="container">
            <section>
                <div className='text-md-start text-center mt-5'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-8 col-lg-9 mb-1 order-1 order-md-0'>
                        <img src=" https://imagizer.imageshack.com/img923/515/ZslHLf.png" 
                        alt="project-logo"
                        className=' image-logo text-center'/>
                        <p>
                        <i className="fa-solid fa-spa lotus-flower pt-1 pb-1"></i></p>
                            <p className="" style={{ fontSize: "0.8rem" }}>
                                En caso de emergencia, por favor utiliza alguno de estos recursos en vez de este sitio.
                            </p>
                            <div className="">
                                <a style={{ fontSize: "0.7rem", color: "#000000"}}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                    href="https://www.gob.cl/saludablemente/">
                                    Saludable Mente </a>
                                <div className=""></div>
                                <a style={{ fontSize: "0.7rem", color: "#000000" }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link "
                                    }
                                    href="http://asistenciaalsuicida.com/telefono-de-la-esperanza-chile/">
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
                        <div className="col-sm-6 col-md-4 col-lg-3 mx-auto mb-4 right-column order-0 order-md-1">
                        <p><img src=" https://imagizer.imageshack.com/img922/7008/9ybO8U.png" 
                        alt="project-logo"
                        className=' image-logo-head text-center'
                        style={{width:"2rem"}} /></p>
                       
                            <Link
                                className="col-10 col-sm-10 col-md-9 col-lg-7 btn btn-primary btn-md appointment-btn mt-3 mb-3"
                                style={{ padding: "", fontSize: "0.68rem" }}
                                to="/appointment">
                                Agendar cita
                            </Link>
                   
                            <NavLink style={{ fontSize: "0.68rem"}}
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link fw-semibold active-link"
                                        : "nav-link fw-semibold"
                                }
                                to="/specialists">
                                Nuestros especialistas
                            </NavLink>

                            <NavLink style={{ fontSize: "0.68rem" }}
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link fw-semibold active-link"
                                        : "nav-link fw-semibold"
                                }
                                to="/register">
                                Regístrate
                            </NavLink>

                            <NavLink style={{ fontSize: "0.68rem" }}
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link fw-semibold active-link"
                                        : "nav-link fw-semibold"
                                }
                                aria-current="page"
                                to="/profile" >
                                Inicia sesión
                            </NavLink>

                            <NavLink style={{ fontSize: "0.68rem" }}
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link fw-semibold active-link"
                                        : "nav-link fw-semibold"
                                }
                                to="/contact">
                                Contáctanos
                            </NavLink>
                            
                            </div>
                        </div>
                    </div>
            </section>
            </div>

            <div className='d-flex justify-content-center p-2 pt-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: "#0d6efd", fontSize: "0.8rem", textAlign: "center" }}>
                <p className="" style={{ color: "black", fontSize: "0.7rem" }}>© Developed by</p>
                <p className="ps-2" style={{ fontSize: "0.7rem" }}>Team <i className="fa-solid fa-spa"></i> Hope</p>
            </div>
        </footer >
    );
};


export default Footer;