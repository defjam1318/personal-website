export function storageOperator(isSet, obj) {
    if (isSet) {
        obj.forEach(x => {
            sessionStorage.removeItem(x);
        });
        return;
    }

    Object.entries(obj).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
    });
}

export function getStorageVar(x) {
    return sessionStorage.getItem(x);
}