import {useNavigate} from "react-router";
import React from "react";


function Link({ to, children }) {
    const navigate = useNavigate();
    return (
        <a
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
export default Link;