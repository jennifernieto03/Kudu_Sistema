import "../assets/styles/Login.css";
import React from "react";
import Slider from "../components/Slider/slider";
//import login from "../components/Login/login";
//import Login from "../components/Login/login"; // desde src/components/Slider/slider.jsx


const Inicio = () => {
  return (
    <div id="login-container" className="flex min-h-screen">
      {/* Panel izquierdo */}
      <div
        id="login_left"
        className="w-1/2 flex items-center justify-center bg-blue-600 p-4"
      >
        <Slider />
      </div>

       {/* Panel derecho */}
      <div
        id="login_right"
        className="w-1/2 flex items-center justify-center bg-white p-8"
      >
        <div className="login-box w-full max-w-md">
          <h2 className="login-title text-2xl font-bold mb-2">Iniciar Sesión</h2>
          <p className="login-subtitle mb-6 text-gray-600">
            Bienvenido al sistema KUDU
          </p>

          <form className="login-form">
            <div className="form-group mb-4">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="usuario@correo.com"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-black"
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-black"
              />
            </div>

            <div className="form-group mb-4">
              <a href="#" className="text-blue-600 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="login-button bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inicio;