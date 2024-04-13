"use client"

import SidebarComponent from "@/app/components/navbar/sidebar";
import {
    RiArrowDownSLine,
    RiCheckboxBlankCircleFill,
    RiNotification2Line,
    RiSearchLine
} from "react-icons/ri";
import ReservationComponent from "@/app/components/navbar/reservationList";
import { getProduct } from "@/_request/products/products";
import { useEffect, useState } from "react";

export default function HomeDashboard() {
    const responsiveBreakpoint: string = "sm:bg-indigo-500 md:bg-red-600 lg:bg-green-300 xl:bg-blue-600 2xl:bg-red-800 bg-violet-600";
    const [products, setProducts] = useState();
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
        try {
            getProduct().then((product) => {
                setProducts(product as any)
                console.log(products)
            });

        } catch (error) {
            console.log(error);
        }

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
                                    <RiCheckboxBlankCircleFill
                                        className="absolute -right-[1px] -top-[1px] text-[9px] text-red-500" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2">
                                    [USERNAME]
                                    <RiArrowDownSLine />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*Dashboard content*/}
                <div className="grid grid-cols-3 p-12 pr-0 gap-2 bg-gray-100">
                    <div className="col-span-2">
                        <span className="font-bold text-xl">
                            Buenos días, [USERNAME].
                        </span>
                        <p className="text-gray-500 text-sm">
                            Esto es lo que está sucediendo hoy en <span className="underline">[Nombre tienda]</span>
                        </p>
                        <div className="grid grid-cols-3">
                            <div className="col-span-3">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Favorite Color</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">Hart Hagerty</div>
                                                            <div className="text-sm opacity-50">United States</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Zemlak, Daniel and Leannon
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                                </td>
                                                <td>Purple</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">details</button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">Brice Swyre</div>
                                                            <div className="text-sm opacity-50">China</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Carroll Group
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                                </td>
                                                <td>Red</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">details</button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">Marjy Ferencz</div>
                                                            <div className="text-sm opacity-50">Russia</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Rowe-Schoen
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                                                </td>
                                                <td>Crimson</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">details</button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" className="checkbox" />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">Yancy Tear</div>
                                                            <div className="text-sm opacity-50">Brazil</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    Wyman-Ledner
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                                </td>
                                                <td>Indigo</td>
                                                <th>
                                                    <button className="btn btn-ghost btn-xs">details</button>
                                                </th>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Job</th>
                                                <th>Favorite Color</th>
                                                <th></th>
                                            </tr>
                                        </tfoot>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReservationComponent />
                </div>
            </div>
        </div>
    )
}