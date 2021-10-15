
export const getUser=()=>{
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken=()=>{
    return localStorage.getItem("Token") || null;
}

export const setUser= (token, user) => {
    localStorage.setItem("Token", token);
    localStorage.setItem("user", JSON.stringify(user));
}

export const removeUser=()=>{
    localStorage.clear();
}

export const getTC=(c)=>{
    let response = null;
    fetch(`http://localhost:8000/${c}/`)
    .then((res) => {
			response = res.json();
			console.log(response);
		});
  return response;
}

