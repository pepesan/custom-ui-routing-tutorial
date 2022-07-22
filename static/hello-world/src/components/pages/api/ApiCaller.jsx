import React, {Fragment, useEffect, useState} from "react";
import Menu from "../../common/Menu";
import {getProjectsData} from "../../../services/jiraapiservice";



function ApiCaller() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(async () => {
        let data = await getProjectsData();
        setData(data);
        setIsLoading(false);
        console.log(data);
    }, []);
    if (isLoading) {
        return (
            <Fragment>
                <Menu></Menu>
                <h2>Api Caller</h2>
                <h2>Cargando... </h2>
            </Fragment>
        );
    }
    return (
        <Fragment>
            <Menu></Menu>
            <h2>Api Caller</h2>
            <h2>Cargado</h2>
            <h2>{data?.values[0].name}</h2>
        </Fragment>
    );

}
export default ApiCaller;