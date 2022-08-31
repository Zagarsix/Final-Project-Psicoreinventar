import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";
import Logo from "../img/nav-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarNew = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const [id, setID] = useState("home");

  const handleActive = (id) => {
    setID(id);
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="main-nav">
      <div className="container">
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          className="py-3"
          style={{ backgroundColor: "white" }}
        >
          <Container className="container-fluid">
            <Nav.Link
              as={HashLink}
              onClick={() => handleActive("home")}
              eventKey="home"
              className={
                id === "home"
                  ? "nav-link fw-semibold link-gray me-2 active-link"
                  : "nav-link fw-semibold link-gray me-2"
              }
              smooth="true"
              to="/#"
            >
              <img
                src={Logo}
                alt="project-logo"
                className="d-inline-block align-top navbar-brand me-5"
              />
            </Nav.Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* Conditionally Rendering links if currentUser is different of null, if user is logged don't show services link, only show specialists and dashboard links*/}
                {!!store.currentUser ? (
                  <>
                    <Nav.Link
                      as={HashLink}
                      onClick={() => handleActive("services")}
                      eventKey="services"
                      className="nav-link fw-semibold link-gray me-2"
                      // className={
                      //   id === "services"
                      //     ? "nav-link fw-semibold link-gray me-2 active-link"
                      //     : ""
                      // }
                      smooth="true"
                      scroll={scrollWithOffset}
                      to="/#services"
                    >
                      Servicios
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      onClick={() => handleActive("specialists")}
                      eventKey="specialists"
                      className={
                        id === "specialists"
                          ? "nav-link fw-semibold link-gray me-2 active-link"
                          : "nav-link fw-semibold link-gray me-2"
                      }
                      to="/specialists"
                    >
                      Especialistas
                    </Nav.Link>

                    <Nav.Link
                      as={NavLink}
                      onClick={() => handleActive("profile")}
                      eventKey="profile"
                      className={
                        id === "profile"
                          ? "nav-link fw-semibold link-gray me-2 active-link"
                          : "nav-link fw-semibold link-gray me-2"
                      }
                      to="/profile"
                    >
                      Panel de usuario
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link
                      as={HashLink}
                      onClick={() => handleActive("services")}
                      eventKey="services"
                      className="nav-link fw-semibold link-gray me-2"
                      // className={
                      //   id === "services"
                      //     ? "nav-link fw-semibold link-gray me-2 active-link"
                      //     : ""
                      // }
                      smooth="true"
                      to="/#services"
                      scroll={scrollWithOffset}
                    >
                      Servicios
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      onClick={() => handleActive("specialists")}
                      eventKey="specialists"
                      className={
                        id === "specialists"
                          ? "nav-link fw-semibold link-gray me-2 active-link"
                          : "nav-link fw-semibold link-gray me-2"
                      }
                      to="/specialists"
                    >
                      Especialistas
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      onClick={() => handleActive("register")}
                      eventKey="register"
                      className={
                        id === "register"
                          ? "nav-link fw-semibold link-gray me-2 active-link"
                          : "nav-link fw-semibold link-gray me-2"
                      }
                      to="/register"
                    >
                      Regístrate
                    </Nav.Link>
                  </>
                )}
              </Nav>
              {/* Admin and doctors shouldn't view agendar cita button on navbar */}
              {store.currentUser?.user?.role_id !== 1 &&
              store.currentUser?.user?.role_id !== 2 ? (
                <div className="d-flex">
                  <Nav.Link
                    as={Link}
                    onClick={() => handleActive("appointment")}
                    eventKey="appointment"
                    className="btn btn-primary btn-md appointment-btn"
                    style={{ padding: ".5em 2em", color: "white" }}
                    to="/appointment"
                  >
                    Agendar cita
                  </Nav.Link>
                </div>
              ) : (
                <></>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarNew;
