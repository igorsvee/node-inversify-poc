import {injectable} from "inversify";
import IUserDAO from "../interfaces/dataaccess/IUserDAO";
import User from "../models/User";


export const user1 = new User('1', 'John');
export const user2 = new User('2', 'Kate');

@injectable()
export default class DummyUserDaoImpl implements IUserDAO<User, string> {
    create(instance: User): Promise<string> {
        return Promise.resolve(user1.id);
    }

    findAll(start: number, count: number): Promise<Array<User>> {
        // return Promise.reject(new Error('mistakes were made'))
        return Promise.resolve([user1,user2]);
    }

    findById(key: string): Promise<User> {
        return Promise.resolve(user1);
    }

}