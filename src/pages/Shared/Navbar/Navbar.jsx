import React from 'react';
import './Navabar.css'
const Navbar = () => {

    const navOptions = <>
        <li><a>Item 1</a></li>
    
        <li><a>Item 3</a></li>
    </>
    return (
        < >
          <div className="navbar fixed z-10 bg-opacity-20 bg-black max-w-screen-xl text-white">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
   {navOptions}
      </ul>
    </div>


    <div className=''>
  <h2 className=" btn-ghost normal-case text-xl mb-0 font-bold ">Bistro Boss   <br />
  <span className='text-sm  uppercase font-semibold'>Restaurant </span>
  </h2>
     
  </div>
    

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>  
        </>
    );
};

export default Navbar;