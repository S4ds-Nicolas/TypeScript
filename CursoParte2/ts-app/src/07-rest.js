"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoleV3 = exports.checkRoleV2 = exports.checkRole = exports.checkAdminRole = void 0;
const _01_enum_1 = require("./01-enum");
const currentUser = {
    username: 'nicobytes',
    role: _01_enum_1.ROLES.CUSTOMER
};
const checkAdminRole = () => {
    if (currentUser.role === _01_enum_1.ROLES.ADMIN) {
        return true;
    }
    return false;
};
exports.checkAdminRole = checkAdminRole;
const rta = (0, exports.checkAdminRole)();
console.log('checkAdminRole', rta);
const checkRole = (role1, role2) => {
    if (currentUser.role === role1) {
        return true;
    }
    if (currentUser.role === role2) {
        return true;
    }
    return false;
};
exports.checkRole = checkRole;
const rta2 = (0, exports.checkRole)(_01_enum_1.ROLES.ADMIN, _01_enum_1.ROLES.SELLER);
console.log('checkRole', rta2);
const checkRoleV2 = (roles) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
};
exports.checkRoleV2 = checkRoleV2;
const rta3 = (0, exports.checkRoleV2)([_01_enum_1.ROLES.ADMIN, _01_enum_1.ROLES.SELLER]);
console.log('checkRoleV2', rta3);
const checkRoleV3 = (...roles) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
};
exports.checkRoleV3 = checkRoleV3;
const rta4 = (0, exports.checkRoleV3)(_01_enum_1.ROLES.ADMIN, _01_enum_1.ROLES.SELLER, _01_enum_1.ROLES.CUSTOMER);
console.log('checkRoleV2', rta4);
