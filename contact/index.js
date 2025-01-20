

async function submitRecipe(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const titleElement = document.getElementById("title");
  const ingredientsElement = document.getElementById("ingredients");
  const prepareProcessElement = document.getElementById("prepare_process");
  const serveElement = document.getElementById("serve");
  const writerElement = document.getElementById("writer");
  const typeElement = document.getElementById("type");
  

  // Check if any of the elements are null
  if (
    !titleElement ||
    !ingredientsElement ||
    !prepareProcessElement ||
    !serveElement ||
    !writerElement ||
    !typeElement 
   
  ) {
    console.error(
      "One or more form elements are missing. Check your HTML form IDs."
    );
    return;
  }

  // Gather form data
  const data = {
    title: titleElement.value,
    ingredients: ingredientsElement.value,
    prepare_process: prepareProcessElement.value,
    serve: serveElement.value,
    writer: writerElement.value,
    type: typeElement.value,
  };

  const csrfToken = getCookie("csrftoken"); // Ensure CSRF token retrieval

  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/recipes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (response.ok) {
      console.log("Recipe submitted successfully!");
    } else {
      console.error(
        "Failed to submit recipe:",
        response.status,
        await response.text()
      );
    }
  } catch (error) {
    console.error("Error while submitting the recipe:", error);
  }
}

document.getElementById("recipeForm").addEventListener("submit", submitRecipe);




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


