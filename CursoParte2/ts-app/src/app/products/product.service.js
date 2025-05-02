"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProduct = exports.Updateproduct = exports.addProduct = exports.products = void 0;
const _1 = require("@faker-js/faker/.");
exports.products = [];
const addProduct = (data) => {
    const NewProduct = Object.assign(Object.assign({}, data), { id: crypto.randomUUID(), createdAt: new Date(), updatedAt: new Date(), category: {
            id: data.categoryId,
            name: _1.faker.commerce.department(),
            createdAt: _1.faker.date.recent(),
            updatedAt: _1.faker.date.recent(),
        } });
    exports.products.push(NewProduct);
    return NewProduct;
};
exports.addProduct = addProduct;
const Updateproduct = (id, changes) => {
    const index = exports.products.findIndex(item => item.id === id);
    const prevData = exports.products[index];
    exports.products[index] = Object.assign(Object.assign(Object.assign({}, prevData), changes), { updatedAt: new Date() });
    return exports.products[index];
};
exports.Updateproduct = Updateproduct;
const findProduct = (dto) => {
    //dto.color = 'red';
    //code
    //dto.tags?.pop();
    //dto.tags = ['red', 'blue'];
    return exports.products;
};
exports.findProduct = findProduct;
