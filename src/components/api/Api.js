import { getBaseUrl } from "../../helpers/Utils";


class Api {
	constructor() {

		this.baseUrl = getBaseUrl();
	}
	post(url, body, headers, successCallback, handleError) {
		
		url = this.baseUrl + url;
		fetch(url, {
			method: 'post',
			body: JSON.stringify(body),
			headers: headers
		})
			.then(function (response) {
				console.log(response.status);
				switch (response.status) {
					case 400:
					case 404:
						console.log('Server Not Found');
						handleError(response.status);
						break;

					case 401:
						console.log('Server Not Found');
						handleError(response.status);
						break;


					default:
						response.json().then(successCallback);
						break;
				}
				// return response.json();
			})
			// .then(function (data) {
			//     successCallback(data);
			// })
			.catch((err) => {
				return handleError(404);
			});
	}

	get(url, body, headers, successCallback, errorCallback) {
		url = this.baseUrl + url;
		fetch(url, {
			method: 'get',
			body: JSON.stringify(body),
			headers: headers
		})
			.then(function (response) {
				successCallback(response);
			})
			.then(function (data) {
				errorCallback(data);
			});
	}

	put(url, body, headers, successCallback, errorCallback) {
		url = this.baseUrl + url;
		fetch(url, {
			method: 'put',
			body: JSON.stringify(body),
			headers: headers
		})
			.then(function (response) {
				successCallback(response);
			})
			.then(function (data) {
				errorCallback(data);
			});
	}
}

export default Api;
