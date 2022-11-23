import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Button } from "react-bootstrap";

const Navbar = (props) => {
  console.log(props)
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
    
      <li key={index}>
        <NavLink  to={url} className="active">
          {title}
        </NavLink>
      </li>
    
      
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav">
      <div className="menu-icon text-right" onClick={handleClick} >
        <img src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg' className="userPhoto" />
        
      </div>
      <ul onClick={handleClick} className={clicked ? "menu-list" : "menu-list close"}>
        {menuList}
        <li>
          <Button className="btn btn-danger" onClick={handleLogout} value="Log out" >
            Log out
          </Button>
        </li>
        </ul>
    </nav>
  );
};

export default Navbar;
