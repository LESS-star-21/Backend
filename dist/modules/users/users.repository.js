import { getDB } from "../../config/database.js";
export class UsersRepository {
    collection() {
        return getDB().collection('users');
    }
    async create(data) {
        const result = await this.collection().insertOne(data);
        return { _id: result.insertedId, ...data };
    }
    async findAllUsers() {
        return await this.collection().find().toArray();
    }
    async findByEmail(email) {
        return await this.collection().findOne({ email });
    }
}
//# sourceMappingURL=users.repository.js.map