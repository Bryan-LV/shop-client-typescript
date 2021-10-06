async function FetchShopItems() {
    try {
        const request = await fetch('https://fakestoreapi.com/products');
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {FetchShopItems};