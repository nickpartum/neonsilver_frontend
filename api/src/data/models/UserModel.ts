import BaseModel from "./BaseModel"

class UserModel extends BaseModel {
    id: number;
    createdAt: string;
    updatedAt: string;

    firstName: string;
    lastName: string;
    email: string;
    password: string;

    static get tableName() {
        return 'user';
    }
}

export default UserModel