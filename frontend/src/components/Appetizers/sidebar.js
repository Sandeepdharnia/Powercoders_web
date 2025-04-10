import React from "react";
import "./appetizers.css"; // Ensure you have a CSS file for styling

const Sidebar = () => (
  <aside>
    <div className="sidebar">
      <ul>
        <li className="aside_items">
          <a href="/appetizers/asian">Asian</a>
        </li>
        <li className="aside_items">
          <a href="/appetizers/middle_eastern">Middle Eastern</a>
        </li>
        <li className="aside_items">
          <a href="/appetizers/european">European</a>
        </li>
        <li className="aside_items">
          <a href="/appetizers/african">African</a>
        </li>
        <li className="aside_items">
          <a href="/appetizers/north_american">North American</a>
        </li>
        <li className="aside_items">
          <a href="/appetizers/south_american">South American</a>
        </li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;