"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const product_service_1 = require("./products/product.service");
for (let index = 0; index < 50; index++) {
    (0, product_service_1.addProduct)({
        title: faker_1.faker.commerce.productName(),
        stock: faker_1.faker.number.int({ min: 0, max: 100 }),
        image: faker_1.faker.image.url(),
        description: faker_1.faker.commerce.productDescription(),
        color: faker_1.faker.color.rgb(),
        price: parseInt(faker_1.faker.commerce.price(), 10),
        isNew: faker_1.faker.datatype.boolean(),
        tags: [faker_1.faker.lorem.word(), faker_1.faker.lorem.word(), faker_1.faker.lorem.word()],
        size: faker_1.faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
        categoryId: faker_1.faker.finance.accountNumber(5),
    });
}
console.log(product_service_1.products);
const product = product_service_1.products[0];
(0, product_service_1.Updateproduct)(product.id, {
    title: 'New title',
    description: 'New description',
    image: 'New image',
    price: 123,
});
(0, product_service_1.findProduct)({
    stock: 10,
    color: 'red',
    id: '123',
});
