import React from "react";
import coinImg from "../../../assets/currency.png"
import logo from "../../../assets/logo.png"
const Navbar = ({coins}) => {
  return (
    
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>
       
        <div className="navbar-end">
            <ul className="flex space-x-6 mr-6">
                <li><a href="#">Home</a></li>
                <li><a href="#">Fixtures</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Schedules</a></li>
            </ul>
            <button className="btn">
                <img src={coinImg}></img>
                <p className="font-bold">{coins}</p>
            </button>
          
        </div>
      </div>

  );
};

export default Navbar;
