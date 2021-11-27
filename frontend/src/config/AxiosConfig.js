import axios from 'axios';

export const loadProxyUrl = () => {
    if (window.location.host.includes('localhost')) {
        return 'http://localhost:8000';
    }
    //LocalNetwork
    if (window.location.host.includes('192.168.0.176')) {
        return 'http://192.168.0.176:8000';
    }
    return 'https://serverURL';
}

const AxiosConfig = axios.create({
    baseURL: `${loadProxyUrl()}/api/`,
    headers: {
        "Content-Type": "application/json"
    },
    proxy: {
        host: `${loadProxyUrl()}`,
        port: 8000
    }
});

export default AxiosConfig;