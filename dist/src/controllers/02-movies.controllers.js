"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = void 0;
const header_1 = require("../models/header");
const getMovies = (req, res) => {
    const headers = new header_1.HeaderData({ status: 'success', message: 'Movies retrieved successfully' });
    res.status(200).send({
        headers,
        data: [
            {
                id: 1,
                title: 'Random Movie',
                description: 'Lorem ipsum dolor sit amet, consectetur adip'
            }
        ]
    });
};
exports.getMovies = getMovies;
//# sourceMappingURL=02-movies.controllers.js.map