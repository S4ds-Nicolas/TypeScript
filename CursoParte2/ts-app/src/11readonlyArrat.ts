const numbers: ReadonlyArray<number> = [1, 2, 3];
//falla por el tipado
//numbers.push(4); 
//numbers.pop();
//numbers.unshift(1);
numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => 0);