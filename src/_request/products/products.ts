'use server'


import { request } from "../request";

export async function getProduct(){
        try {
        const ENDPOINT = 'auth/products';
        const response = await request(ENDPOINT, 'GET', {});
        console.log(response);

        if (response.error) {
            return Promise.reject(response)
        }
        
        return {
            error: false,
            errorDescription: null,
            message: response.message
        }
    } catch (error) {
        return Promise.reject({
            error: true,
            //@ts-ignore
            errorDescription: error.message,
            message: null
        })
    }

}