const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {
        // CORS 
        this.app.use(cors());

        // READ & PARSE BODY
        this.app.use(express.json());
        // Public Directory
        this.app.use(express.static('public'));
    }
    routes() {

        this.app.use(this.usersPath, require('../routes/users.routes'))
    }
    listen() {
        this.app.listen(this.port, () => {

            console.log(`Server running in ${this.port} port`)
        });
    }
}

module.exports = Server;