import React from "react";
function Footer({ isDarkMode }) {
  return (
    <footer className={`py-8  ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © 2024 AI Companion. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
