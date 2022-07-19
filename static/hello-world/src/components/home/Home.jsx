import React, {Fragment} from "react";
import Link from "../Link";

function Home() {
    return (
        <Fragment>
            <h2>Home</h2>
            <Link to="/about">About</Link>
            <Link to="/form">Formulario</Link>
        </Fragment>
    );
}
export default Home;