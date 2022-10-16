import BaseModel from "../models/BaseModel";
import {camelToSnakeCase} from "./helpers";
import {OrderByDirection} from "objection";

const pageSize = 20

interface ICrudGetList {
    filter: {
        [key: string]: string[];
    };
    sort: string[2];
    page?: number
}

class BaseRepository {
    model: typeof BaseModel;

    constructor(model: typeof BaseModel) {
        this.model = model;
    }

    getList = ({filter, sort, page = 1}: ICrudGetList) => {
        const query = this.model.query().page(page - 1, pageSize)

        const keysFilter = Object.keys(filter);

        keysFilter.forEach((key: string) => {
            if (key === 'id') {
                query.findByIds(filter[key]);
            } else {
                query.where(key, 'ilike', `%${filter[key]}%`);
            }
        });

        return sort ? query.orderBy(camelToSnakeCase(sort[0]), sort[1] as OrderByDirection) : query;
    };

    getById(id: number) {
        return this.model.query().select('*').where('id', id).first();
    }

    create = async (data: any) => {
        return this.model.query().insert(data);
    };

    update = async (id: number, data: any) => {
        return this.model.query().patchAndFetchById(id, data);
    };

    delete(id: number) {
        return this.model.query().deleteById(id).returning('*');
    }

    deleteByIds = async (filter: { ids: number[] }) => {
        return this.model.query().delete().whereIn('id', filter.ids).returning('*');
    };
}

export default BaseRepository;