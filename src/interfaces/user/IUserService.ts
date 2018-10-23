import User from '../../models/User';

export default interface IUserService {
    findById(id: string): Promise<User>;

    findAll(start: number, count: number): Promise<Array<User>>;

    create(user: User): Promise<void>;
}