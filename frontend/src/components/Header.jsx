import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
function Header() {

  const[user,setUser] = useState("");

  useEffect(() => {

    // Get the value of a cookie
    let value = JSON.parse(sessionStorage.getItem("user"));
      if (value && value.donor) {
        setUser(value.donor.name);
      }
   

  }, []);

  return (

    <nav className="nav_container bg-red-500 mt-15">
      <div className="content">
        <div className="left_nav ">
          <div className="logo">
            
            <div className="image">
              <img
                src="/assets/images/logo.png"
                width="70"
                height="70"
                alt="logo"
              />
            </div>

            <div className="logo_title">
              <a href="/"><h4>BeLIFE</h4></a>
            </div>
          </div>

          <div className="links mx-0">
            <ul className="">
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="/#campaign">Campaign</a>
              </li>
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="/#analytics">Analytics</a>
              </li>
            
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="/#why">Why?</a>
              </li>
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="/register">Create Account</a>
              </li>
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href={`${user != "" ? `/profile` : "/login"}`}>{user != "" ? `Profile` : "Login"}</a>
              </li>
              {/* <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="/login">Logout</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right_nav justify-self-end">
          <div className="versions">
            <div className="version">
              <h5>{user != "" ? `Welcome ${user}` : "Made With Love"}</h5>
              
            </div>
            <div className='loader'></div>
          </div>
          <div className="sidemenu" id="sidemenu" onclick="openNav()">
            
            <img src="/static/images/menu.png" width="20" height="20" id="mobile_menu_icon"/>
          
          </div> 
        </div>
      </div>

      <div className="mobile_menu_slide" id="mobile_menu_slide">
          <div className="links mx-0">
            <ul className="">
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="#predictor" onClick="openNav()">
                  Predictor
                </a>
              </li>
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="#why" onClick="openNav()">
                  Why?
                </a>
              </li>
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="#parameters" onClick="openNav()">
                  Parameters
                </a>
              </li>

              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="#supported" onClick="openNav()">
                  Key Parameters
                </a>
              </li>

              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <a href="#help" onClick="openNav()">
                  Help
                </a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
}

export default Header;
