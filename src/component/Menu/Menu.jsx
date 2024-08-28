// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Menu.css"; // CSS faylingizni ulashing

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button className="fixed-menu" onClick={toggleMenu}>
        &#9776; {/* Bu Unicode bilan burger menyuni bildiradi */}
      </button>

      {isOpen && (
        <nav className="menu">
          <ul>
            <li>
              <a href="#home">Bosh sahifa</a>
            </li>
            <li>
              <a href="#about">Biz haqimizda</a>
            </li>
            <li>
              <a href="#services">Xizmatlar</a>
            </li>
            <li>
              <a href="#paket">Ta`riflar</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
