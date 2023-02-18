"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const header_1 = require("../models/header");
const getProducts = (req, res) => {
    const timestamp = new Date().toISOString();
    const headers = new header_1.HeaderData({ timestamp, status: 'success', message: 'Products retrieved successfully' });
    res.status(200).send({
        headers,
        data: [
            {
                id: 1,
                title: 'Product',
                description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit'
            }
        ]
    });
};
exports.getProducts = getProducts;
//# sourceMappingURL=ecommerce.controllers.js.map