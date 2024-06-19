import axios from "axios";
import { apiEndpoints } from "lib/api-endpoints";


export const getGlobalSettings = () => {
    return axios({
        method: apiEndpoints.getSettings.method,
        url: apiEndpoints.getSettings.url,
    });
}


export const postRequestACall = (data: any) => {
    return axios({
        method: apiEndpoints.postRequestACall.method,
        url: apiEndpoints.postRequestACall.url,
        data
    });
}
