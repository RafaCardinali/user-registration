import React from "react";
import './Nav.css';
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = (props) => (
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <FaHome />
                Início
            </Link>
            <Link to="/users">
                <FaUsers />
                Usuários
            </Link>
        </nav>
    </aside>
);

export default Nav;