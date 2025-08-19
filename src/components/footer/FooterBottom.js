import React from "react";

const FooterBottom = () => {
  return (
    <footer className="w-full py-6">
      <p className="text-center text-gray-400 text-sm md:text-base">
        © {new Date().getFullYear()} Hafeed Muhammed. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterBottom;
