// Controlador para la página de inicio de la API
export const index = (req, res) => {
  // Devuelve un mensaje de bienvenida en formato JSON
  res.json({ message: "Welcome to my API" });
};

// Controlador para manejar rutas que no existen
export const defaultRoute = (req, res) => {
  // Devuelve un error 404 con un mensaje en formato JSON
  res.status(404).json({ message: "This page doesn't exist" });
};
