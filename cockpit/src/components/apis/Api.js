import Utils from '../../helpers/Utils';

class Api {
    constructor() {
        this.util = new Utils();
        this.baseUrl = this.util.getBaseUrl();
    }



    post(url, body, headers, successCallback, errorCallback) {
        url = this.util.getBaseUrl()+url;        
        fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: headers
        }).then(function (response) {
            successCallback(response);

        }).then(function (data) {
            errorCallback(data);
        });
    }


};



export default Api;