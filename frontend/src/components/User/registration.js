import React, { useState } from "react";
//import Swal from "sweetalert2";
// import API_BASE from '../../utils/api';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
    
    console.log("Please make sure both passwords are the same.");
    return;
    }

    try {
      const response = await fetch('https://powercoders-web.onrender.com/api/v1/register/',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirm_password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      

        if (response.ok) {
        console.log("Registration successful!");
        setFormData({
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      } else {
          console.log("Registration failed");
          
        
      }
    } catch (err) {
      console.error("Registration error:", err);
      
    }
  };

  return (
    <div className="contact_us">
      <div className="contact_us_container">
        <div className="contact_us_content">
          <h2>
            <a href="/login_logout">Login</a> || Register
          </h2>
          <p>
            Stay tuned for more delicious recipes and <br />
            login to share your own recipes with us.
          </p>
        </div>

        <div className="contact_us_content1">
          <div className="register_form">
            <h3>Register here</h3>
            <form
              id="registerForm"
              className="contact_form"
              onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username .."
                required
                value={formData.username}
                onChange={handleChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email .."
                required
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password .."
                required
                value={formData.password}
                onChange={handleChange}
              />

              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="confirm password .."
                required
                value={formData.confirm_password}
                onChange={handleChange}
              />

              <input id="submit" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
