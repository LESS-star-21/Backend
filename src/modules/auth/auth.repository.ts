import { getDB } from "../../config/database.js";
import { User } from "../users/users.model.js";

export class AuthRepository {
    private collection(){
        return getDB().collection<User>('users');
    }

    async findEmail(email:string): Promise<User | null> {
        return this.collection().findOne({ email });
    }

    async create(user: User): Promise<User | null> {

        const result = await this.collection().insertOne(user);
        
        return {_id: result.insertedId, ...user};
    }
}