//recibe el req y res de la ruta y llama al servicio para obtener los usuarios
import { Request, Response } from "express";
import { UsersService } from "./users.service.js";

export class UsersController {

    private _UsersService= new UsersService();

    register = async (req: Request, res: Response) => {
        // Implementation for registering a user
        const result = await this._UsersService.register(req.body);

        res.status(201).json(result);
    }

    findAllUsers = async (req: Request, res: Response) => {
        // Implementation for finding all users
        const users = await this._UsersService.findAllUsers();
        res.status(200).json(users);
    }

}