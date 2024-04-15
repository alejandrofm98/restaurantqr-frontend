"use client"

import SidebarComponent from "@/app/components/navbar/sidebar";
import {
    RiArrowDownSLine,
    RiCheckboxBlankCircleFill,
    RiNotification2Line,
    RiSearchLine
} from "react-icons/ri";
import ReservationComponent from "@/app/components/navbar/reservationList";
import { getProduct, ProductInterface } from "@/_request/products/products";
import { useEffect, useState } from "react";

export default function HomeDashboard() {
    const responsiveBreakpoint: string = "sm:bg-indigo-500 md:bg-red-600 lg:bg-green-300 xl:bg-blue-600 2xl:bg-red-800 bg-violet-600";
    const [products, setProducts] = useState<ProductInterface[]>();
    async function product() {
        try {

            const product = await getProduct();
            setProducts(product as any)
            console.log(products);

        } catch (error) {
            console.log(error);
        }
    }

    // NO TOCAR O SE ROMPE.

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProduct();
                if (response.error) {
                    throw new Error(response.errorDescription || 'Error desconocido al obtener productos');
                }
                setProducts(response.products as any);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProducts();
    }, []);

    // NO TOCAR O SE ROMPE.

    useEffect(() => {
        console.log(products)
    }, [products]);

    return (
        <div className={"min-h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7"}>
            <SidebarComponent />
            <div
                className={"lg:col-span-6 md:col-span-4 col-span-1 md:grid-cols-3 bg-gray-100"}>
                {/* Header   */}
                <header className="bg-white flex items-center justify-between p-4 shadow-md w-full">
                    <form className="sm:w-[30%] w-1/2">
                        <div className="relative">
                            <RiSearchLine className="absolute left-2 top-3" />
                            <input className="pl-8 pr-4 py-2 outline-none rounded-lg w-full bg-gray-100"
                                placeholder="Buscar..." />
                        </div>
                    </form>
                    <nav className="sm:w-[70%] w-1/2 flex justify-end">
                        <ul className="flex items-center gap-4">
                            <li>
                                <a href="#" className="relative">
                                    <RiNotification2Line />
                                    <RiCheckboxBlankCircleFill className="absolute -right-[1px] -top-[1px] text-[9px] text-red-500" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*Dashboard content*/}
                        <div className="col-span-3">
                            <div className="overflow-x-auto">
                                <table className="table text-black">
                                    <thead className="text-2xl text-black">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>estado</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.isArray(products) && products.length > 0 && products.map(product => (
                                            <tr key={product.id}   className="hover:bg-slate-400">
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.price}</td>
                                                <td>{product.category}</td>
                                                <td>{product.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
