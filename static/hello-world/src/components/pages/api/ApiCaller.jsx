import React, {Fragment, useEffect, useState} from "react";
import Menu from "../../common/Menu";
import { requestJira } from '@forge/bridge';

const getProjectsData = async () => {
    const response = await requestJira('/rest/api/3/project/search');
    const miJson = await response.json()
    console.log(miJson);
    console.log(miJson.values);
    return miJson;
}

function ApiCaller() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(async () => {
        let data = await getProjectsData();
        setIsLoading(false);
        setData(data);
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