import React from "react";
import './Logo.css';
import logo from "../../assets/imgs/logo-cardinali.png";
import { Link } from "react-router-dom";

const Logo = (props) => (
    <aside className="logo">
    <Link to="/" className="logo">
        <img src={logo} alt='logo' />
    </Link>
</aside>
)

export default Logo;