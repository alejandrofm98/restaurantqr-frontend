'use server'


import { request } from "../request";

export interface ProductInterface {
    status: string;
    id: string;
    name: string;
    price: number;
    category: number;
    description: string;
}

interface ProductResponse extends Request {
    error: boolean;
    errorDescription: string | null;
    products: ProductInterface[] | any;
}

export async function getProduct(): Promise<ProductResponse> {
    try {
        const ENDPOINT = 'auth/products';
        const response = await request(ENDPOINT, 'GET', {});

        if (response.error) {
            return Promise.reject(response)
        }
        //@ts-ignore
        return {
            error: false,
            errorDescription: null,
            products: response.message
        }
    } catch (error) {
        return Promise.reject({
            error: true,
            //@ts-ignore
            errorDescription: error.message,
            products: null
        })
    }

}