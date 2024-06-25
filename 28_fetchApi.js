

const productResponse = await fetch("https://fakestoreapi.com/products");
const products = await productResponse.json();
for (const product of products) {
    console.log(`Id:${product.id}, price:${product.price},title:${product.title}`);
    
}



















