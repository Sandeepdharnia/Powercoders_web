import React from "react";
//import { Button } from "reactstrap";
import "./header.css";
import Video from "./cooking_ready.mp4" 

function Header() {
    return (
      <div className="container">
        <div className="header">
          <div className="backgroundvideo1">
            <video autoPlay loop muted src={Video} type="video/mp4" />
          </div>
          <h1> Delicious Recipes</h1>
          <nav className="navbar">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/appetizers/asian">Appetizers</a>
              </li>
              <li>
                <a href="/main_meals/asian">Main Courses</a>
              </li>
              <li>
                <a href="/desserts/">Desserts</a>
              </li>
              <li>
                <a href="/contact/">Contact</a>
              </li>
              <li>
                <a href="/login_logout/">Sign in</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default Header;