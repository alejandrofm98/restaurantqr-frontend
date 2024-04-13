'use server'

import {ErrorCodes} from "@/_lib/constants/errorCodes";
import { get } from "http";

type Request_Type = 'GET' | 'POST' | 'DELETE';

export interface RequestResponse {
    statusText: any;
    error: boolean,
    errorDescription: string | null,
    message: [] | {} | null
}

export async function request(endpoint: string, method: Request_Type, body ?: {}): Promise<RequestResponse> {
    try {
        let var1 = {
            credentials: 'include',
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: method.toUpperCase() !== 'GET' ? JSON.stringify(body) : null,
        }
        let var2 = {
            
            credentials: 'include',
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(`${process.env.API_BASE_URL}${endpoint}` as string,var1 as any);

        console.log(response)
        if (response.status === 403) {
            await Promise.reject(ErrorCodes.WrongUserOrPassword);
        }
        if (response.status === 500) {
            await Promise.reject(ErrorCodes.ServerError)
        }
        const responseBody = await response.json();
        return {
            error: false,
            errorDescription: null,
            message: responseBody
        }
    } catch (error:any) {
        console.log(error)
        error = Object.values(ErrorCodes).includes(error as string) ? error : 'Something went wrong';
        return {
            error: true,
            //@ts-ignore
            errorDescription: error,
            message: error.message
        }
    }
}