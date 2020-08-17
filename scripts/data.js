export default function requestData(appId, restApi) {
    return function (dataTable, requestName, body, id) {
        const baseUrl = 'https://api.backendless.com/';
        const token = sessionStorage.getItem('user-token');
        const headers = { 'Content-type': 'application/json' };
        if (token) {
            headers['user-token'] = token;
        }
        if (body) {
            body = JSON.stringify(body);
        }
        const options = {
            // login: () => ({ method: 'POST', headers, body }),
            // register: () => ({ method: 'POST', headers, body }),
            // logout: () => ({ method: 'GET', headers }),
            getAll: () => ({ method: 'GET' }),
            getOne: () => ({ method: 'GET' }),
            // create: () => ({ method: 'POST', headers, body }),
            // edit: () => ({ method: 'PUT', headers, body }),
            // delete: () => ({ method: 'DELETE', headers }),
            param: () => ({ method: 'GET' }),
            search: () => ({ method: 'GET' }),
            sort: () => ({ method: 'GET' }),
        }
    
        const endPoints = {
            // login: 'users/login',
            // register: 'users/register',
            // logout: 'users/logout',
            getAll: `data/${dataTable}`,
            getOne: `data/${dataTable}/${id}`,
            // create: `data/${dataTable}`,
            // edit: `data/${dataTable}/${id}`,
            // delete: `data/${dataTable}/${id}`,
            param: `data/${dataTable}?where=ownerId%3D${encodeURIComponent("'" + id + "'")}`,
            search: `data/${dataTable}?where=genres%20LIKE%20%27${id}%25%27`,
            sort: `data/${dataTable}?sortBy=dateTime%20desc`
        }
        
        return Promise.resolve(fetch(`${baseUrl}${appId}/${restApi}/${endPoints[requestName]}`, options[requestName]()));
        // return await fetch(`${baseUrl}${appId}/${restApi}/${endPoints[requestName]}`, options[requestName]());
    }
}