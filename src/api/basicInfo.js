import request from "../utils/request"

export function basicCreate(basicInfo){
    return request({
        url:'/basic-info/create',
        method:'post',
        data:basicInfo,
    })
}
export function getBasicInfos(params){
    return request({
        url:'/basic-info/getInfos',
        method:'get',
        params:{
            limit:params.limit,
            page:params.page,
        }
    })
}

export function deleteBasicInfo(nameCode){
    return request({
        url:`/basic-info/remove/${nameCode}`,
        method:'post',
        nameCode
    })
}