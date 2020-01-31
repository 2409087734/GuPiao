import axios from "axios";

//api
let request = axios.create({
    //development:开发环境  production:生产环境
    baseURL: process.env.NODE_ENV === "production" ? "" : "/api",
    timeout: 2000

});

/*AxiosRequestConfig */
request.interceptors.request.use((config) => {
    config.headers = {
        authorization: localStorage.token
    };

    return config;
}, (error) => {//""  {}
    Promise.reject(error);
});


request.interceptors.response.use(function (res) {

    return res;
}, function (error) {
    switch (error.status) {
        case "401":
            break;
        case "422":
            break;
        case "502":
            break;
    }
});

let get = request.get;
let post = request.post;
let deletes = request.delete;
let put = request.put;


export {
    get,
    post,
    deletes,
    put
}
