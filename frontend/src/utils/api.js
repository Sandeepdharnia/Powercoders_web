let API_BASE = 
typeof import.meta !== "undefined" &&
import.meta.env &&
import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : "http://localhost:8000";

export default API_BASE;
