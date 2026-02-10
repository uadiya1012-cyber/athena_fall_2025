export interface Product {
    id: number,
    name: string,
    price: string,
}

export interface CartItem {
    id: number,
    name: string,
    price: string,
    qty: number
}


export interface CartData {
    cart: { items: Record<string, CartItem> };
    total: string;
}