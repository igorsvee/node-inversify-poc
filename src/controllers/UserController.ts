import * as express from "express";
import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    httpDelete,
    request,
    queryParam,
    next,
    response,
    requestParam
} from "inversify-express-utils";
import {inject} from "inversify";
import User from "../models/User";
import IUserService from "../interfaces/user/IUserService";
import TYPE from '../constants/TYPES';

@controller("/users")
export class UserController implements interfaces.Controller {

    private readonly _userService: IUserService;

    public constructor(@inject(TYPE.UserService) userService: IUserService) {
        this._userService = userService;
    }

    @httpGet("/")
    private getAll(@queryParam("start") start: number, @queryParam("count") count: number,
                   @response() res: express.Response, @next() next: express.NextFunction) {
        return this._userService.findAll(start, count)
            .then((users: Array<User>) => res.json({data: users}))
            .catch((err: Error) => {
                res.status(400).json({error: err.message});
            });
    }

    @httpGet("/:id")
    private getById(@requestParam("id") id: string, @response() res: express.Response) {
        return this._userService.findById(id)
            .then((user: User) => res.json({data: user}))
            .catch((err: Error) => {
                res.status(400).json({error: err.message});
            });
    }

    @httpPost("/")
    private create(@request() req: express.Request, @response() res: express.Response) {
        return this._userService.create(req.body)
            .then(() => res.sendStatus(201))
            .catch((err: Error) => {
                res.status(400).json({error: err.message});
            });


    }
}



