"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const getError = (req, res) => {
    res.sendFile('error/index.html', { root: 'public' });
};
router.get('/', getError);
exports.default = router;
//# sourceMappingURL=00-error.routes.js.map