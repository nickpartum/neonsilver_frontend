import BaseRepository from "./BaseRepository";
import UserModel from "../models/UserModel";

class UserRepository extends BaseRepository {
    findByEmail = async (email: string) => UserModel.query().where('email', 'ilike', email).first();
}

export default new UserRepository(UserModel)
