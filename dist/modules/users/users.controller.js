import { UsersService } from "./users.service.js";
export class UsersController {
    _UsersService = new UsersService();
    register = async (req, res) => {
        // Implementation for registering a user
        const result = await this._UsersService.register(req.body);
        res.status(201).json(result);
    };
    findAllUsers = async (req, res) => {
        // Implementation for finding all users
        const users = await this._UsersService.findAllUsers();
        res.status(200).json(users);
    };
}
//# sourceMappingURL=users.controller.js.map