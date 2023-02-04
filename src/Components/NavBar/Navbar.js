import React from "react";
import CarWidget from "../CarWidget/CarWidget";
import '../NavBar/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/Mascotas">Mascotas</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/Hogar Geek">Hogar Geek</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/Home Office">Home Office</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/Cocina Divertida">Cocina Divertida</Link>
            </li>
            <div className="widget-container">
                        <CarWidget/>
            </div>
        </ul>
        </>
    );

}


export default NavBar 