import React, { useState } from "react";
import "./contactAndRecipe.css";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    prepare_process: "",
    serve: "",
    type: "asian",
    type_meal: "appetizer",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
  }

    // send `formData` to a backend here
    const handleSubmit = async (e) => {
      e.preventDefault();

      const token = localStorage.getItem("authToken");

      try {
        const response = await fetch(
          "https://powercoders-web.onrender.com/api/v1/submit_recipes/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Token ${token}` }),
            },
            body: JSON.stringify({
              title: formData.title, // Ensure the correct key here
              ingredients: formData.ingredients, // Ensure the correct key here
              prepare_process: formData.prepare_process,
              serve: formData.serve,
              type: formData.type,
              type_meal: formData.type_meal,
            }),
            credentials: "include",
          }
        );
        console.log(formData);
        if (response.ok) {
          setSubmitted(true);
          setFormData({
            title: "",
            ingredients: "",
            prepare_process: "",
            serve: "",
            type: "",
            type_meal: "",
          });
          console.log("Message sent successfully");
        } else {
          const error = await response.json();
          console.error("Failed to submit contact form:", error);
          alert("Failed to submit message. Please try again.");
        }
      } catch (err) {
        console.error("Error submitting contact form:", err);
        alert("Something went wrong. Please try again later.");
      }
    };

  return (
    <>
      <div className="add_recipe_container">
        <div className="add_recipe">
          <h3>Your Recipe</h3>
          <p>
            Share your recipe with us and we <br />
            will add it to our collection of recipes.
          </p>
        </div>
      </div>

      <div className="contact_us">
        <div className="contact_us_container">
          <div className="contact_us_content1">
            {submitted ? (
              <p className="thank_you">
                <span role="img" aria-label="Ok">
                  ✅
                </span>
                Thank you for submitting your recipe!
              </p>
            ) : (
              <form
                id="recipeForm"
                className="contact_form"
                onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title..."
                  value={formData.title}
                  onChange={handleChange}
                  required
                  minLength={4}
                  maxLength={50}
                />

                <label htmlFor="ingredients">Ingredients</label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients..."
                  style={{ height: "100px" }}
                  value={formData.ingredients}
                  onChange={handleChange}
                  required
                  minLength={30}
                  maxLength={250}></textarea>

                <label htmlFor="prepare_process">Prepare Process</label>
                <textarea
                  id="prepare_process"
                  name="prepare_process"
                  placeholder="Preparation process..."
                  style={{ height: "100px" }}
                  value={formData.prepare_process}
                  onChange={handleChange}
                  required
                  minLength={30}
                  maxLength={500}></textarea>

                <label htmlFor="serve">Serve</label>
                <textarea
                  id="serve"
                  name="serve"
                  placeholder="Serve with..."
                  value={formData.serve}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={500}></textarea>

                <label htmlFor="type">Type of Cuisine</label>
                <select
                  className="submit_options"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required>
                  <option value="asian">Asian</option>
                  <option value="middle_east">Middle Eastern</option>
                  <option value="european">European</option>
                  <option value="african">African</option>
                  <option value="north_american">North American</option>
                  <option value="south_american">South American</option>
                </select>

                <label htmlFor="type_meal">Type of Meal</label>
                <select
                  className="submit_options"
                  id="type_meal"
                  name="type_meal"
                  value={formData.type_meal}
                  onChange={handleChange}
                  required>
                  <option value="appetizer">Appetizer</option>
                  <option value="maincourse">Main Course</option>
                  <option value="dessert">Dessert</option>
                </select>

                <button id="submit" type="submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default AddRecipeForm;
