import React, {Fragment} from "react";
import Link from "../../Link";
import Menu from "../../common/Menu";

function Home() {
    return (
        <Fragment>
            <Menu></Menu>
            <h2>Home</h2>
            <Link to="/about">About</Link>
            <Link to="/form">Formulario</Link>
        </Fragment>
    );
}
export default Home;