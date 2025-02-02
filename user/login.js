async function submitLogin(event) {
  event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!email || !password) {
        console.error("email and password are required.");
        return;
    }

  const data = {
    email: email,
    password: password,
  };
    console.log(data);
    

  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(response);
    
    if (response.ok) {
      const result = await response.json();
      console.log("Login successful!", result);
      alert(`Welcome! Your token is: ${result.token}`);
      // Save token to localStorage or use it for further requests
    } else {
      const errorData = await response.json();
      console.error("Login failed:", errorData);
      alert("Login failed: " + errorData.error);
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again later.");
  }
}

document
    .getElementById("loginForm")
    .addEventListener("submit", submitLogin);
