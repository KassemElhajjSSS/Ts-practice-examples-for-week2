"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUser = ShowUser;
exports.isAdmin = isAdmin;
function ShowUser(user) {
    return "id number: ".concat(user.id, ", username: ").concat(user.name, ", Email: ").concat(user.email, ", birthDate: ").concat(user.birthDate);
}
function isAdmin(admin) {
    return admin.position === 'admin';
}
