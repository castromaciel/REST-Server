"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = exports.moviesRoutes = exports.errorRoutes = exports.ecommerceRoutes = exports.apiRoutes = void 0;
var _00_api_routes_1 = require("./00-api.routes");
Object.defineProperty(exports, "apiRoutes", { enumerable: true, get: function () { return __importDefault(_00_api_routes_1).default; } });
var _01_ecommerce_routes_1 = require("./01-ecommerce.routes");
Object.defineProperty(exports, "ecommerceRoutes", { enumerable: true, get: function () { return __importDefault(_01_ecommerce_routes_1).default; } });
var _00_error_routes_1 = require("./00-error.routes");
Object.defineProperty(exports, "errorRoutes", { enumerable: true, get: function () { return __importDefault(_00_error_routes_1).default; } });
var _02_movies_routes_1 = require("./02-movies.routes");
Object.defineProperty(exports, "moviesRoutes", { enumerable: true, get: function () { return __importDefault(_02_movies_routes_1).default; } });
var users_routes_1 = require("./users.routes");
Object.defineProperty(exports, "userRoutes", { enumerable: true, get: function () { return __importDefault(users_routes_1).default; } });
//# sourceMappingURL=index.js.map