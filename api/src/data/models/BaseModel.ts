import {Model, snakeCaseMappers} from "objection";

class BaseModel extends Model {
    id: number;

    createdAt: string;

    updatedAt: string;

    static get columnNameMappers() {
        return snakeCaseMappers()
    }

    $beforeInsert() {
        const date = new Date().toISOString();

        this.createdAt = date;
        this.updatedAt = date;
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}

export default BaseModel