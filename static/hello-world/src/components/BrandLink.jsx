import {useNavigate} from "react-router";
import React from "react";


function BrandLink({ to, children }) {
    const navigate = useNavigate();
    return (
        <a
            className="navbar-brand"
            href={to}
            onClick={(event) => {
                event.preventDefault();
                navigate(to);
            }}
        >
            {children}
        </a>
    );
}
export default BrandLink;