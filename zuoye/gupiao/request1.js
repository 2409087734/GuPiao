import axios from 'axios';

let request = axios.create({
    timeout: 5000
});

/*
 * 请求拦截
 * */

request.interceptors.request.use((config) => {
    config.headers.authorization = JSON.parse(sessionStorage.getItem('authorization'));
    return config;
}, (err) => {
    console.error(err);
});

/*
 * 响应
 * */
request.interceptors.response.use(
    response => {
        return response.data;
    },
    err => {
        console.log(err);
    }
);

/*
 * 函数*/
let get = url => request.get(url);
let post = (url, params) => request.post(url, params || {});
let deletes = (url, params) => request.delete(url, params || {});

export { get, post, deletes };