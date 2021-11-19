import React from "react";
import "./Header.css";
import Button from "../UI/Button"

const Header = () => {
  return (
    <header className="header">
      <ul className="nav">
        <li>
          <a href="#">React CB</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Create</a>
        </li>
      </ul>

      <div >
        <Button className="newAccountButton">Create Account</Button>
        <Button className="signInButton">Sign in</Button>
      </div>
    </header>
  );
};

export default Header;
