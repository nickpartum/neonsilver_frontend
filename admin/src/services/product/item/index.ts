import {api} from "../../../api";

export const list = async (page = 1) => {
    return await api.get<any>('/product/item',{params:{page: page}})
}