// src/data/products.js
import bambooToothbrush from '../assets/bambootooth.jpg';
import reusableBag from '../assets/reusable bag.jpg';
import organicTshirt from '../assets/organictshirt.webp';

export const products = [
    {
        id: 1,
        name: 'Eco-friendly Bamboo Toothbrush',
        description: 'A sustainable bamboo toothbrush with soft bristles.',
        price: 3.99,
        image: bambooToothbrush
    },
    {
        id: 2,
        name: 'Reusable Shopping Bag',
        description: 'Durable and eco-friendly reusable shopping bag.',
        price: 5.99,
        image: reusableBag
    },
    {
        id: 3,
        name: 'Organic Cotton T-shirt',
        description: 'Comfortable t-shirt made from 100% organic cotton.',
        price: 19.99,
        image: organicTshirt
    }
];
