import {Container} from "inversify";
import TYPES from "./constants/TYPES";
import IUserService from "./interfaces/services/IUserService";
import DummyUserService from "./services/user/DummyUserService";
import './controllers/UserController';
import IUserDAO from "./interfaces/dataaccess/IUserDAO";
import DummyUserDaoImpl from "./dataaccess/DummyUserDaoImpl";
import User from "./models/User";

const myContainer = new Container();
myContainer
    .bind<IUserService>(TYPES.UserService)
    .to(DummyUserService);  //    specifying constructor function of the service

myContainer
    .bind<IUserDAO<User, string>>(TYPES.UserDAO)
    .to(DummyUserDaoImpl);  //    specifying constructor function of the DAO object

export default myContainer;