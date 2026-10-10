const products = [
    { id: 1, name: "Laptop", price: 45000000, stock: 3 },
    { id: 2, name: "Mouse", price: 800000, stock: 0 },
    { id: 3, name: "Keyboard", price: 2200000, stock: 8 }
];


const isAvailible = products.some( x => x.stock === 0)

console.log(isAvailible)