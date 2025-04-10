import React from "react";
import "./appetizers.css"; // Ensure you have a CSS file for styling

const RecipeItem = ({ title, description, ingredients, steps, serve }) => (
  <div className="inner_recipes_block_spilter">
    <div className="inner_recipes_block_spilt_1">
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="inner_recipes_block_spilt_2">
      <h3>Preparation Process:</h3>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <h3>Serve:</h3>
      <ul>
        <li>{serve}</li>
      </ul>
    </div>
  </div>
);

export default RecipeItem;