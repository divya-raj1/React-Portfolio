import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-600 dark:text-gray-400 py-5">
      <p>&copy; {new Date().getFullYear()} Divya Raj. All rights reserved.</p>
      <p className="mt-2">
        Made with 💻 and ☕ by <span className="text-blue-600 dark:text-blue-400">Divya Raj</span>
      </p>
    </footer>
  );
};

export default Footer;