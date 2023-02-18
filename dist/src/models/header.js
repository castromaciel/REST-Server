"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderData = void 0;
class HeaderData {
    constructor({ message, status }) {
        this.status = status;
        this.message = message;
        this.timestamp = new Date().toISOString();
    }
}
exports.HeaderData = HeaderData;
//# sourceMappingURL=header.js.map