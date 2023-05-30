import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBars , FaShopify, FaEnvelope} from 'react-icons/fa';
import useCart from '../Hooks/useCart';
const Dashboard = () => {
  const [cart] = useCart()
    return (
        <div className="drawer drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
       
    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content uppercase">
      <h2 className=' mt-2 ms-8 text-2xl mb-6 font-bold uppercase italic'>Bistro Boss
        <br />
        <span className='text-xl font-semibold'>Restaurant</span>
      </h2>
      {/* <!-- Sidebar content here --> */}
      <li><NavLink to="/dashboard/userHome"> <FaHome></FaHome>User Home</NavLink></li>
      <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
      <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>Payment History</NavLink></li>
      <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>
      
      My Cart
      <div className="badge badge-secondary">+{cart?.length || 0}</div>
      </NavLink></li>
      <div className="divider "></div>

      <li><NavLink to='/'><FaHome
      ></FaHome>Home</NavLink></li>
       <li>
        <NavLink to="/menu"> <FaBars></FaBars>Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad"> <FaShopify></FaShopify>Order Dish</NavLink>
      </li>
      <li>
        <NavLink to="/order/contact"> <FaEnvelope></FaEnvelope>Contact</NavLink>
      </li>

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;