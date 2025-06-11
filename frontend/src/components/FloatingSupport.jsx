import React, { useState } from 'react';
import { 
  FaHeadset, 
  FaEnvelope, 
  FaWhatsapp, 
  FaTelegramPlane, 
  FaQuestionCircle 
} from 'react-icons/fa';

const FloatingSupport = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {open && (
          <div className="mb-2 flex flex-col items-end space-y-2 animate-fadeIn">
            <a
              href="mailto:soporte@finportapp.com"
              className="flex items-center space-x-2 bg-white shadow-md rounded-full px-3 py-2 hover:bg-gray-100 transition"
            >
              <FaEnvelope />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white shadow-md rounded-full px-3 py-2 hover:bg-gray-100 transition"
            >
              <FaWhatsapp />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href="https://t.me/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white shadow-md rounded-full px-3 py-2 hover:bg-gray-100 transition"
            >
              <FaTelegramPlane />
              <span className="text-sm">Telegram</span>
            </a>
            <a
              href="/faq"
              className="flex items-center space-x-2 bg-white shadow-md rounded-full px-3 py-2 hover:bg-gray-100 transition"
            >
              <FaQuestionCircle />
              <span className="text-sm">FAQ</span>
            </a>
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          <FaHeadset size={24} />
        </button>
      </div>
    </div>
  );
};

export default FloatingSupport;