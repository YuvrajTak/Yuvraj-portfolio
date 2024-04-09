import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
        <div className="bg-white rounded-lg border-2 border-gray-100">

          <h1 className='text-blue-400 p-2'>Y U V R A J Tak</h1>
        </div>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/connect' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Connect
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
