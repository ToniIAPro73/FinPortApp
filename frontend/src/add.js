
import React from "react";
import FloatingSupport from "./components/FloatingSupport"; // Importa el botón de soporte

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido a FinPortApp!</h1>
      <p className="text-gray-600 mt-2">Tu plataforma para análisis financiero sostenible</p>
      
      {/* Botón de soporte flotante */}
      <FloatingSupport />
    </div>
  );
};