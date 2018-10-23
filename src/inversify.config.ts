import {Container} from "inversify";
import TYPES from "./constants/TYPES";
import IUserService from "./interfaces/user/IUserService";
import DummyUserService from "./services/user/DummyUserService";
import './controllers/UserController';

const myContainer = new Container();
myContainer
    .bind<IUserService>(TYPES.UserService)
    .to(DummyUserService);  //    specifying constructor function of a service

export default myContainer;