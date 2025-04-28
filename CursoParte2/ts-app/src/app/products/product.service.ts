import { Product } from './product.model'
import { CreateProductDTO } from './product.dto'
import { faker } from '@faker-js/faker/.';


export const products: Product[] = [];


export const addProduct = (data: CreateProductDTO) => {
    const NewProduct = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    }
    products.push(NewProduct);
    return NewProduct;
}

export const Updateproduct = (id: string, product: Product) => {
//TODO: Create a function to update a product
}