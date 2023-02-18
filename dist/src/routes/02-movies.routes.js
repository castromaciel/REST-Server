"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _02_movies_controllers_1 = require("../controllers/02-movies.controllers");
const router = (0, express_1.Router)();
router.get('/', _02_movies_controllers_1.getMovies);
exports.default = router;
//# sourceMappingURL=02-movies.routes.js.map