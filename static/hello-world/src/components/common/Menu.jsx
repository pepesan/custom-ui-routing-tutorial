import React, {Fragment} from "react";
import Link from "../Link";
import BrandLink from "../BrandLink";
import MenuLink from "../MenuLink";

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <BrandLink to="/"><img src="/bootstrap_logo.svg" alt="" width="30" height="24"/></BrandLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <MenuLink to="/">Home</MenuLink>
                        <MenuLink to="/about">About</MenuLink>
                        <MenuLink to="/form">Form</MenuLink>
                        <MenuLink to="/form2">Form2</MenuLink>

                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Menu;