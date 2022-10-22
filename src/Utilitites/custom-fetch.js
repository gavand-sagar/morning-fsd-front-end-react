export function customDelete(url) {
    return fetch(url, {
        method: 'DELETE'
    })
        .then(s => s.json())

}

export function customGet(url) {
    return fetch(url)
        .then(s => s.json())

}




export function customPost(url, obj) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(s => s.json())

}



export function customPatch(url, obj) {
    return fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(s => s.json())

}


export function customPut(url, obj) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(s => s.json())

}


