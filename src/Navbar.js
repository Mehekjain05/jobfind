import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <NavLink className="navbar-brand" to="#">JobFinder</NavLink>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact  className="nav-link menu_active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact  className="nav-link menu_active" to="/about">About Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact  className="nav-link menu_active" to="/contact">Contact Us</NavLink>
                                        </li>
                                        
                                    </ul>

                                </div>
                            </div>
                        </nav>


                    </div>
                </div>
            </div>

        </>

    )
}

export default Navbar;