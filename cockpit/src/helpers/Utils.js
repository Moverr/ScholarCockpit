class Utils {

    BASE_URL = " http://localhost:9876/";
    endpoints = {
        users: "user/v1/",
        roles: "roles/v1/",
    }

    getBaseUrl() {
        return this.BASE_URL;
    }

    getEndPoint=(endpoint)=> {
        return this.endpoints[endpoint];
    }

    getFullUrl=(endpoint)=> {
        return this.getBaseUrl() + this.getEndPoint(endpoint);
    }





}

export default Utils;