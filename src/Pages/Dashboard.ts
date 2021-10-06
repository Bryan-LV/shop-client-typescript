import { BuildShopItems } from "../Shop/BuildShopItems";
import { FetchShopItems } from "../Shop/fetchShopItems";
import {Product} from '../interfaces';

export async function Dashboard() {
    let shop: Product[];
    let template;
    let storage = window.localStorage.getItem('shop');

    // check if store data is not already in local storage
    if(window.localStorage && !storage) {
        // pull from api
        shop = await FetchShopItems();
        window.localStorage.setItem('shop', JSON.stringify(shop));
        template = BuildShopItems(shop);
    }

    if(window.localStorage && storage) {
        shop = JSON.parse(storage);
        template = BuildShopItems(shop);
    }

    return `<div id="products" class="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 m-6">${template}</div>`;    
}