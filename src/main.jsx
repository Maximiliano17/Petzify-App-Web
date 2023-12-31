//Importes
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
//Componentes
import Home from './pages/Home.jsx';
import App from './App.jsx'
import Mimascota from './pages/Mimascota.jsx';

//Rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 
  },
  { 
    path: "/home",
    element: <Home />,
  },
  { 
    path: "/mascota",
    element: <Mimascota />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);