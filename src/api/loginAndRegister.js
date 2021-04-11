import request from "../utils/request"

export function login(userInfo){
    return request({
        // baseURL:'/api',
        // url: '/database/index',
        // baseURL:'http://localhost:9999',
        url:'/user/login',
        method: 'post',
        data:userInfo,
    })
}