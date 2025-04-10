import React from "react";
import "./mainmeals.css"; // Ensure you have a CSS file for styling

const MainMealsSidebar = () => (
  <aside>
    <div className="sidebar">
      <ul>
        <li className="aside_items">
          <a href="/main_meals/asian">Asian</a>
        </li>
        <li className="aside_items">
          <a href="/main_meals/middle_eastern">Middle Eastern</a>
        </li>
        <li className="aside_items">
          <a href="/main_meals/european">European</a>
        </li>
        <li className="aside_items">
          <a href="/main_meals/african">African</a>
        </li>
        <li className="aside_items">
          <a href="/main_meals/north_american">North American</a>
        </li>
        <li className="aside_items">
          <a href="/main_meals/south_american">South American</a>
        </li>
      </ul>
    </div>
  </aside>
);

export default MainMealsSidebar;