export default function requestData(appId, restApi) {
    return function (dataTable, requestName, body = {}, id) {
        const baseUrl = 'https://api.backendless.com/';
        const headers = { 'Content-type': 'application/json' };

        const options = {
            getAll: () => ({ method: 'GET' }),
            getOne: () => ({ method: 'GET' }),
            param: () => ({ method: 'GET' }),
            search: () => ({ method: 'GET' }),
            sort: () => ({ method: 'GET' }),
            nextEvents: () => ({ method: 'GET' }),
            sendEmail: () => ({ method: 'POST', headers, body: JSON.stringify(body)}),
            featured: () => ({ method: 'GET' }),
        }
     
        const endPoints = {
            getAll: `data/${dataTable}`,
            getOne: `data/${dataTable}/${id}`,
            param: `data/${dataTable}?where=ownerId%3D${encodeURIComponent("'" + id + "'")}`,
            search: `data/${dataTable}?where=genres%20LIKE%20%27${id}%25%27`,
            sort: `data/${dataTable}?sortBy=featured%20desc`,
            nextEvents: `data/${dataTable}?pageSize=${body.size}&where=dateTime%20%3E${body.dateTime}&sortBy=dateTime%20asc`,
            sendEmail: 'http://localhost:5001/toma-iliev/us-central1/sendEmail',
            featured: `data/${dataTable}?where=featured%20%3D%20true`,
        }
        // return Promise.resolve(fetch(`${baseUrl}${appId}/${restApi}/${endPoints[requestName]}`, options[requestName]()));
        return Promise.resolve(fetch(endPoints.sendEmail,options.sendEmail));
    }
}