import { useState } from "react";
import { Link } from "react-router-dom";
import logoPF from "images/logopf2.png";
import logoPfDesk from "images/logopf2_desktop.png";
import HeaderStyle from "./HeaderStyle";
import React from "react";

function Header() {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  const hideMenu = () => {
    setisOpenMenu(!isOpenMenu);
  };

  return (
    <HeaderStyle>
      <div className="contain scroll ">
        <Link to="/">
          <div className="logo-mobile">
            <img src={logoPF} alt="peso-fuerte" />
          </div>
        </Link>

        <i className="fas fa-bars" onClick={hideMenu}></i>
      </div>
      <nav className={`menu ${isOpenMenu ? "active" : ""}`}>
        <div className="contain menu-open">
          <Link to="/">
            {" "}
            <div className="logo-mobile">
              <img src={logoPF} alt="peso-fuerte" />
            </div>
            <div className="logo-desktop">
              <img src={logoPfDesk} alt="peso-fuerte" />
            </div>
          </Link>

          <i className="fas fa-times" onClick={hideMenu}></i>
        </div>
        <ul>
          <li>
            <Link to="/how_function" onClick={hideMenu}>
              Cómo funciona
            </Link>
          </li>
          <li>
            <Link to="/frequent_questions" onClick={hideMenu}>
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link onClick={hideMenu} to="/login">
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link className="style-btn" onClick={hideMenu} to="/create_account">
              Crear cuenta
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
