import { Link } from "react-router-dom";

import "../assets/css/header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="main__container">
        <Link to="/" className="company__logo">
          <img
            src="https://dcassetcdn.com/design_img/3761645/831606/22840165/xkxbzd593wyg0g96gpjrqwzkm5_image.jpg"
            alt="Company Logo"
            loading="lazy"
          />
        </Link>

        <nav className="nav__items">
          <Link className="nav__item" to="/">
            Home
          </Link>
          {/* <Link className="nav__item" to="/about-us">
            About Us
          </Link>
          <Link className="nav__item" to="/contact">
            Contact
          </Link> */}
        </nav>

        {/* <div className="auth__btns">
          <button className="signup__btn">Sign Up</button>
          <button className="login__btn">Login</button>
        </div> */}
      </div>
    </header>
  );
}
