"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const header_1 = require("../models/header");
const getProducts = (req, res) => {
    const headers = new header_1.HeaderData({ status: 'success', message: 'Products retrieved successfully' });
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
//# sourceMappingURL=01-ecommerce.controllers.js.map