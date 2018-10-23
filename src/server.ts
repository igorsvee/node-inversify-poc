import {InversifyExpressServer} from "inversify-express-utils";
import container from "./inversify.config";
import * as bodyParser from "body-parser";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
});

export default server.build();