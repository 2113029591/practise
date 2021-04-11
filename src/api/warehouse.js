import request from "../utils/request"
export function warehouseCreate(warehouseInfo){
    return request({
        url:"/warehouse-item/create",
        method:'post',
        data:warehouseInfo,
    })
}
export function warehouseGetInfos(params){
    return request({
        url:"/warehouse-item/getInfos",
        method:"get",
        params:{
            limit:params.limit,
            page:params.page,
        }
    })
}