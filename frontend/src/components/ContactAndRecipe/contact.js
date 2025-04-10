import React, { useState } from "react";
import "./contactAndRecipe.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can validate fields here if needed
    console.log("Form submitted:", formData);

    // Clear the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    setSubmitted(true);

    // You can also send this data to a backend here
    //fetch("http://127.0.0.1:8000/api/v1/login/"
    fetch("http://127.0.0.1:8000/api/v1/login/", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="contact_us">
      <div className="contact_us_container">
        <div className="contact_us_content">
          <h2>Contact Us</h2>
          <p>
            For any questions or suggestions,
            <br />
            please feel free to contact us.
          </p>
          <p>Old-fashioned phone calls work too.</p>
          <p>
            <span role="img" aria-label="old_phone">
              ☎️
            </span>{" "}
            123-456-7890
          </p>
          <p>
            <span role="img" aria-label="letter_box">
              📫
            </span>{" "}
            8080 Taste Town
          </p>
          <p>
            <span role="img" aria-label="globe">
              🌐
            </span>{" "}
            State New Cooking Passion
          </p>
        </div>

        <div className="contact_us_content1">
          {submitted ? (
            <p className="thank_you">
              <span role="img" aria-label="Ok">✅ </span> Thank you! We’ve received your message.
            </p>
          ) : (
            <form className="contact_form" onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name..."
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <br />

              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name..."
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <br />

              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email..."
                value={formData.email}
                onChange={handleChange}
                required
              />
              <br />

              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="Write something..."
                style={{ height: "200px" }}
                value={formData.message}
                onChange={handleChange}
                required></textarea>
              <br />

              <input id="submit" type="submit" value="Submit" />
            </form>
          )}
        </div>
      </div>

      <div className="add_recipe_container">
        <div className="add_recipe">
          <button>
            <a href="/add_recipe">Add Your Recipes</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
