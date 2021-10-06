import { Product } from "../interfaces";

function BuildShopItems(shop: Product[]) {
    const buildTemplate = shop.map(product => {
        return `
        <div id="${product.id}" class="shadow-md w-4/5 my-6 p-4 flex flex-col justify-between">
            <img class="w-32" src="${product.image}" alt="${product.description}" />
            <div class="">
                <h2 class="text-2xl py-4">${product.title}</h2>
                <p class="text-lg">${product.price}</p>
                <span class="bg-gray-100 p-2 rounded-sm mt-4 inline-block">${product.category}</span>
            </div>
        </div>`
    }).join('');

    return buildTemplate;
}

export {BuildShopItems};