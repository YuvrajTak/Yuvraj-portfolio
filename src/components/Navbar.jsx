import { NavLink } from "react-router-dom";
import React,{useEffect, useRef} from "react";

import { logo } from "../assets/images";

const Navbar = () => {
  

 
  return (
    <header className='header'>
      <NavLink to='/'>
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
        {/* <div className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition-transform hover:scale-105">

          <h1 className='p-2'>Y U V R A J Tak</h1>
        </div> */}
     {/* <button className="glow-on-hover" type="button">Yuvraj Tak</button> */}
     
        <span className="grey-color"> &lt;</span>
        <span className="splash-title" style={{fontFamily:'Agustina Regular'}}>Yuvraj Tak</span>
        <span className="grey-color">/&gt;</span>
      

      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Connect
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
