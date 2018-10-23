import {injectable} from "inversify";

import IUserService from '../../interfaces/user/IUserService';
import User from "../../models/User";

export const user1 = new User('1', 'John');
export const user2 = new User('2', 'Kate');

@injectable()
export default class DummyUserService implements IUserService {
    findById(id: string): Promise<User> {
        return Promise.resolve(user1);
    }

    findAll(start: number, count: number): Promise<Array<User>> {
        // return Promise.reject(new Error('mistakes were made'))
        return Promise.resolve([user1, user2]);
    }

    create(user: User): Promise<void> {
        return Promise.resolve();
    }
}