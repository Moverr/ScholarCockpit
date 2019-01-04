import Utils from '../../helpers/Utils';

class Api {
    constructor() {
        this.util = new Utils();
        this.baseUrl = this.util.getBaseUrl();
    }
    post(url, body, headers, successCallback,handleError) {
        url = this.util.getBaseUrl()+url;        
        fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: headers
        }).then(function (response) {  
            console.log(response.status)
            switch(response.status){
                case 400:
                    return null;                 
                default:
                return response.json();
                 
            }
            // return response.json();      
        }).then(function (data) {
            successCallback(data);
        })
        .catch((err)=>handleError(err));
    }
 
    get(url, body, headers, successCallback, errorCallback) {
        url = this.util.getBaseUrl()+url;        
        fetch(url, {
            method: 'get',
            body: JSON.stringify(body),
            headers: headers
        }).then(function (response) {
            successCallback(response);

        }).then(function (data) {
            errorCallback(data);
        });
    }


    put(url, body, headers, successCallback, errorCallback) {
        url = this.util.getBaseUrl()+url;        
        fetch(url, {
            method: 'put',
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