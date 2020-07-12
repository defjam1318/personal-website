const BASE_URL = 'https://api.backendless.com/15C593AB-9536-907B-FF65-4DBA06EB5D00/40F1E389-542D-464F-A1A9-E61AED1F5A13/data/expenseTable';

export async function requestToPost(item) {
    return await (await fetch(BASE_URL, { method: 'POST', body: JSON.stringify(item), headers: { 'Content-Type': 'application/json' } })).json();
}

export async function requestToPut(id, item) {
    return await (await fetch(`${BASE_URL}/${id}`, { method: 'PUT', body: JSON.stringify(item), headers: { 'Content-Type': 'application/json' } })).json();
}

export async function requestToGet() {
    const extra = '?pageSize=100';
    return await (await fetch(BASE_URL + extra)).json();
}

export async function requestToDelete(id) {
    return await (await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })).json();
}