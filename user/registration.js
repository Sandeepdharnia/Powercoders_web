async function submitRegistration(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const usernameElement = document.getElementById("username");
  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");
  const confirm_passwordElement = document.getElementById("confirm_password");
  // Check if any of the elements are null
  if (
    !usernameElement ||
    !emailElement ||
    !passwordElement ||
    !confirm_passwordElement
  ) {
    console.error(
      "One or more form elements are missing. Check your HTML form IDs."
    );
    return;
  }

    
    
 function getCookie(name) {
   let cookieValue = null;
   if (document.cookie && document.cookie !== "") {
     const cookies = document.cookie.split(";");
     for (let i = 0; i < cookies.length; i++) {
       const cookie = cookies[i].trim();
       if (cookie.substring(0, name.length + 1) === name + "=") {
         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
         break;
       }
     }
   }
   console.log(cookieValue);

   return cookieValue;
 }

   
  // Gather form data
  const data = {
    username: usernameElement.value,
    email: emailElement.value,
    password: passwordElement.value,
    confirm_password: confirm_passwordElement.value,
  };
  console.log(data);
  

    const csrfToken = getCookie("csrftoken"); // Ensure CSRF token retrieval
    console.log("Ensure CSRF token retrieval", csrfToken);

  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
      
      console.log("response",response, data);
      

    if (response.ok) {
      console.log("Your are registeration submitted successfully!");
    } else {
      try {
        const errorData = await response.json(); // Attempt to parse JSON
        alert(`Login failed: ${errorData.error || "Unknown error"}`);
      } catch {
        const errorText = await response.text(); // Fallback to plain text
        alert(`Login failed: ${errorText || "Unknown error"}`);
      }
    }
  } catch (error) {
    console.error("Error while submitting the registraion:", error);
  }
}

document
  .getElementById("registerForm")
  .addEventListener("submit", submitRegistration);
