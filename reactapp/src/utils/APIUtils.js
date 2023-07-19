export const API_BASE_URL ="https://8080-bafcabaebbdbfcfdcdaadecbbaeeaadadfcaea.project.examly.io";


// export const API_BASE_URL ="https://8080-daefebfdcdcdaadecbbaeeaadadfcaea.project.examly.io";   



const ACCESS_TOKEN ="";

const request = (options) => {
   const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/user/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/user/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}