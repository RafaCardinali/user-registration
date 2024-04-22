import React from "react";
import './Header.css';
import { FaHome, FaUsers } from "react-icons/fa";

const Header = (props) => {
    let iconComponent;

    if (props.icon === "home") {
        iconComponent = <FaHome />;
    } else if (props.icon === "users") {
        iconComponent = <FaUsers />;
    }

    return (
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            {iconComponent} {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>
    )
}

export default Header;