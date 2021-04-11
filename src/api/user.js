import request from "../utils/request"
export function modifyUserInfo(userInfo){
    return request({
        url:"user/modify",
        method:"post",
        data:userInfo
    })
}
export  function  userCreate(createInfo){
    return request({
        url:"user/create",
        method:"post",
        data:createInfo,
    })
}