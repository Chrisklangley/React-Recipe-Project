import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div>
        <h2 className="title">Devmountain Eatery</h2>
      </div>
      <nav>
        <Link className="link" to="">
          <button>Home</button>
        </Link>
        <Link className="link" to="/recipes">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
