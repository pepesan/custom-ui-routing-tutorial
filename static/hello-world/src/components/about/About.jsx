import React, {Fragment} from "react";
import Link from "../Link";
import {useNavigate} from "react-router";
function About() {
    let navigate = useNavigate();
    const handleClick = () => navigate("/", { replace: true });
    return (
        <Fragment>
            <h2>About</h2>
            <Link to="/">Volver al home</Link>
            <button onClick={handleClick}>
                Home
            </button>
        </Fragment>
    );
}
export default About;