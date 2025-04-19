let API_BASE;
try {
    API_BASE = import.meta.env.VITE_API_URL; 
    
} catch {
    API_BASE = "http://localhost:8000";
}
export default API_BASE;
