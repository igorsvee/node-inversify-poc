import {inject, injectable} from "inversify";

import IUserService from '../../interfaces/services/IUserService';
import User from "../../models/User";
import TYPE from "../../constants/TYPES";
import IUserDAO from "../../interfaces/dataaccess/IUserDAO";

type UserDaoType = IUserDAO<User, string>;



@injectable()
export default class DummyUserService implements IUserService {

    private readonly _userDAO: UserDaoType;

    public constructor(@inject(TYPE.UserDAO) _userDAO: UserDaoType) {
        this._userDAO = _userDAO;
    }

    findById(id: string): Promise<User> {
        return this._userDAO.findById(id);
    }

    findAll(start: number, count: number): Promise<Array<User>> {
        return this._userDAO.findAll(start,count);
    }

    create(user: User): Promise<string> {
        return this._userDAO.create(user);
    }
}