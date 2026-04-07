import { getDB } from "../../config/database.js";

export class UsersRepository {
    private collection(){
        return getDB().collection('users');
    }

    async create(data:any){
        const result = await this.collection().insertOne(data);
        return {_id: result.insertedId, ...data};
    }

    async findAllUsers(){
        return await this.collection().find().toArray();
    }

    async findByEmail(email:string){
        return await this.collection().findOne({email});
    }
}