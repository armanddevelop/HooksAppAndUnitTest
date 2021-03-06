import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              exact="true"
              className="nav-link"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            <NavLink exact="true" className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink exact="true" className="nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
