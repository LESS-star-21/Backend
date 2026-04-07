//logica de negocio de los usuarios
import { UsersRepository } from "./users.repository.js";
export class UsersService {
    repository = new UsersRepository();
    async register(data) {
        const exists = await this.repository.findByEmail(data.email);
        if (exists) {
            throw new Error('User already exists');
        }
        return await this.repository.create(data);
    }
    async findAllUsers() {
        return await this.repository.findAllUsers();
    }
}
//# sourceMappingURL=users.service.js.map