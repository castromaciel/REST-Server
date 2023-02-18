"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _01_ecommerce_controllers_1 = require("../controllers/01-ecommerce.controllers");
const router = (0, express_1.Router)();
router.get('/', _01_ecommerce_controllers_1.getProducts);
exports.default = router;
//# sourceMappingURL=01-ecommerce.routes.js.map