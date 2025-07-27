import { NavLink } from "react-router-dom";

import logo from "../assets/images/k.png";

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-12 h-18 object-contain" />
      </NavLink>
  
      <nav className="hidden sm:flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
       
      </nav>
    </header>
  );
};

export default Navbar;
