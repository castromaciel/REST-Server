"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const getApis = (req, res) => {
    res.json({
        movies: 'movies',
        ecommerce: 'e-commerce'
    });
};
router.get('/', getApis);
exports.default = router;
//# sourceMappingURL=00-api.routes.js.map