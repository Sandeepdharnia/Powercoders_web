import React, { useState } from "react";
import "./login-out.css"

const LoginLogout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.error("Email and password are required.");
      return;
    }

    const token = localStorage.getItem("authToken");
    console.log("Stored Token:", token);

    const data = {
      email,
      password,
    };
console.log('this is line 24', data);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
             ...(token && { Authorization: `Token ${token}` }),
          },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("authToken", result.token);

        window.location.href = "/";
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        alert("Login failed: " + errorData.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("You are not logged in!");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/logout/",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.ok) {
        localStorage.removeItem("authToken");
        window.location.href = "/login_logout";
        alert("You logged out. Bye bye")
      } else {
        const error = await response.json();
        alert(error.error || "Failed to log out");
      }
    } catch (err) {
      console.error("Logout error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact_us">
      <div className="contact_us_container">
        <div className="contact_us_content">
          <h2>Login</h2>
          <div className="contact_us_content1">
            <form onSubmit={handleLogin} className="contact_form">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email ..."
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password ..."
                required
              />

              <button id="submit" type="submit">
                Login
              </button>
            </form>
                  </div>
          <div>
            <button id="submit">
              <a href="/register">Register here!</a>
            </button>
          </div>
        </div>

        <div className="contact_us_content">
          <p>
            Want to leave us
            <span role="img" aria-label="sad_emoji">
              😞
            </span>
          </p>
          <h3>Press logout button</h3>
          <div className="contact_us_content1">
             <button id="submit" onClick={handleLogout}>
              Logout
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLogout;
