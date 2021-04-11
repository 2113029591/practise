import request from "../utils/request"
export function instorageCreate(instorageInfo){
    return request({
        url:'/instorage/create',
        method:'post',
        data:instorageInfo,
    })
}