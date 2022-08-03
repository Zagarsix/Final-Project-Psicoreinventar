import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
