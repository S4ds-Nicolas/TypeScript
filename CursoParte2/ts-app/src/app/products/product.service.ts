import { Product } from './product.model'
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from './product.dto'
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

export const Updateproduct = (id: Product['id'], changes: UpdateProductDTO) : Product => {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes,
        updatedAt: new Date(),
    }
    return products[index];
}

export const findProduct = (dto: FindProductDTO): Product[] => {
    //dto.color = 'red';
    //code
    return products;
}

