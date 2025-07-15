// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 z-50 w-full bg-[#171616] p-6 pl-11 pr-9 backdrop-blur-lg">
//       <div className="flex items-center justify-between">
//         <NavLink to="/" onClick={() => setMenuOpen(false)}>
//           <img src={assets.ChandulaLogo} alt="Logo" className="w-[150px] cursor-pointer" />
//         </NavLink>

//         <nav className="hidden space-x-6 text-[20px] md:flex">
//           <NavLink to="/about" className="hover:text-gold text-white transition duration-300">About Me</NavLink>
//           <NavLink to="/services" className="hover:text-gold text-white transition duration-300">Services</NavLink>
//           <NavLink to="https://www.allinoneholdings.com/" target="_blank" className="hover:text-gold text-white transition duration-300">All In One</NavLink>
//           <NavLink to="/contact" className="hover:text-gold text-white transition duration-300">Contact</NavLink>
//         </nav>


//         <button onClick={() => setMenuOpen(!menuOpen)} className="text-white md:hidden">
//           {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </button>
//       </div>

//       {menuOpen && (
//         <nav className="absolute left-0 top-16 flex w-full flex-col items-center space-y-4 bg-[#171616] py-5 shadow-md md:hidden">
//           <NavLink to="/about" className="hover:text-gold text-white" onClick={() => setMenuOpen(false)}>About Me</NavLink>
//           <NavLink to="/services" className="hover:text-gold text-white" onClick={() => setMenuOpen(false)}>My Services</NavLink>
//           <NavLink to="https://www.allinoneholdings.com/" target="_blank" className="hover:text-gold text-white" onClick={() => setMenuOpen(false)}>All In One</NavLink>
//           <NavLink to="/contact" className="hover:text-gold text-white" onClick={() => setMenuOpen(false)}>Contact</NavLink>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;









import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle =
    "text-white text-lg font-medium transition-all duration-300 hover:text-red-500";

  return (
    <header className="fixed top-0 z-50 w-full bg-[#171616]/80 shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={assets.ChandulaLogo}
            alt="Logo"
            className="w-[140px] cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden items-center space-x-8 md:flex">
          <NavLink to="/about" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? "text-red-500" : ""}`
          }>
            About Me
          </NavLink>
          <NavLink to="/services" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? "text-red-500" : ""}`
          }>
            Services
          </NavLink>
          <a
            href="https://www.allinoneholdings.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkStyle}
          >
            All In One
          </a>
          <NavLink to="/contact" className={({ isActive }) =>
            `${navLinkStyle} ${isActive ? "text-red-500" : ""}`
          }>
            Contact
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white md:hidden">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute left-0 top-[72px] flex w-full flex-col items-center space-y-5 rounded-b-xl bg-[#171616]/95 py-6 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden">
          <NavLink to="/about" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
            About Me
          </NavLink>
          <NavLink to="/services" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
            My Services
          </NavLink>
          <a
            href="https://www.allinoneholdings.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            All In One
          </a>
          <NavLink to="/contact" className={navLinkStyle} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
