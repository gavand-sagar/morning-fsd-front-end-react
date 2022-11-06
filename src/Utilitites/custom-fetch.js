export function customDelete(url) {
    return fetch(process.env.REACT_APP_BE_API_URL + url, {
        method: 'DELETE',
        headers: {
            'MyName': localStorage.getItem('usernameValue'),
            'Token':localStorage.getItem('token')
        }

    })
        .then(s => s.json())

}

export function customGet(url) {
    return fetch(process.env.REACT_APP_BE_API_URL + url, {
        method: 'GET',
        headers: {
            'MyName': localStorage.getItem('usernameValue'),
            'Token':localStorage.getItem('token')
        }
    })
        .then(s => s.json())

}




export function customPost(url, obj) {
    return fetch(process.env.REACT_APP_BE_API_URL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'MyName': localStorage.getItem('usernameValue'),
            'Token':localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    })
        .then(s => s.json())

}



export function customPatch(url, obj) {
    return fetch(process.env.REACT_APP_BE_API_URL + url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'MyName': localStorage.getItem('usernameValue'),
            'Token':localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    })
        .then(s => s.json())

}


export function customPut(url, obj) {
    return fetch(process.env.REACT_APP_BE_API_URL + url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'MyName': localStorage.getItem('usernameValue'),
            'Token':localStorage.getItem('token')
        },
        body: JSON.stringify(obj)
    })
        .then(s => s.json())

}


