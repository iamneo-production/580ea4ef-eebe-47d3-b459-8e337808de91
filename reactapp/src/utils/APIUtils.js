// export const API_BASE_URL ="https://8080-aaffcaedafdcdaadecbbaeeaadadfcaea.project.examly.io";


export const API_BASE_URL ="https://8080-daefebfdcdcdaadecbbaeeaadadfcaea.project.examly.io";   



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

// export function login(loginRequest) {
//   return request({
//       url: API_BASE_URL + "/user/login",
//       method: 'POST',
//       body: JSON.stringify(loginRequest)
//   });
// }

export async function login(loginRequest) {
  try {
    const response = await fetch(API_BASE_URL + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    });

    if (!response.ok) {
      throw new Error("Login failed. Invalid credentials.");
    }

    const data = await response.json();
    const { token, tokenType, userRole } = data;

    // Save the token and tokenType in local storage
    localStorage.setItem("token", `${tokenType} ${token}`);

    // Return the object containing status, token, tokenType, and userRole
    return {
      status: true,
      token,
      tokenType,
      userRole,
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      status: false,
      token: null,
      tokenType: null,
      userRole: null,
    };
  }
}

export function signup(signupRequest) {
  return request({
      url: API_BASE_URL + "/user/signup",
      method: 'POST',
      body: JSON.stringify(signupRequest)
  });
}