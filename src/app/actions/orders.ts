import { api, apiErrorHandler } from "@/lib/api";
import { ReturnValue, ReturnValueWithPagination } from "@/types";
import { CreateOrderDTO, Order } from "@/types/orders";
import { AxiosRequestConfig } from "axios";

export async function createOrder(data:CreateOrderDTO, config?:AxiosRequestConfig) {
    try {
        const {data:res} = await api.post<ReturnValue<Order>>('/orders-service', data, config)

        return res
    } catch (err) {
        return apiErrorHandler<ReturnValue<null>>(err)
    }
}

export async function getOrders(config?:AxiosRequestConfig) {
    try {

        const {data:res} = await api.get<ReturnValueWithPagination<Order>>('/orders-service', config)


        return res
    } catch (err) {
        console.log(err)
        return apiErrorHandler<ReturnValue<null>>(err)
    }
}

export async function getOrderById(id:string, config?:AxiosRequestConfig) {
    try {

        const {data:res} = await api.get<ReturnValue<Order>>(`/orders-service/${id}`, config)

        return res
    } catch (err) {
        console.log(err)
        return apiErrorHandler<ReturnValue<null>>(err)
    }
}