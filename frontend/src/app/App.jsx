import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo"
import AppRoutes from './AppRoutes';
import Nav from "../components/nav/Nav";


const App = (props) => (
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <AppRoutes />
            <Footer />
        </div>
    </BrowserRouter>
)

export default App;
    
