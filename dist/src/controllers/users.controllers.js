"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.status(201).json({
        message: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.status(201).json({
        id,
        message: 'getUser'
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.status(201).json({
        body,
        message: 'postUser'
    });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        message: 'putUser'
    });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        message: 'deleteUser'
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map