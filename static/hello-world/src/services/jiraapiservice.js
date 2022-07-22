import {requestJira} from "@forge/bridge";

export const getProjectsData = async () => {
    const response = await requestJira('/rest/api/3/project/search');
    const miJson = await response.json()
    console.log(miJson);
    console.log(miJson.values);
    return miJson;
}