import React, { useContext } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div>
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6 className="h6">ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6 className="h6">SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6 className="h6">TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6 className="h6">CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6 className="h6">DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6 className="h6">FOOD</h6>
          </Link>
          <span className="span">{currentUser?.username}</span>
          {currentUser ? (
            <span className="span" onClick={logout}>
              Logout
            </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link to="/write">write</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
