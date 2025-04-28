import {faker} from '@faker-js/faker';
import { addProduct, products} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 0, max: 100 }),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.rgb(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    categoryId: faker.finance.accountNumber(5),
  })
  
}

console.log(products);