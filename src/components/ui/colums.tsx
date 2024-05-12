'use client'

import {ColumnDef} from "@tanstack/react-table";
import {FaSort} from "react-icons/fa";
import {revalidateContent} from "@/_request/revalidateContent";
import Image from "next/image";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {BsThreeDots} from "react-icons/bs";

export type Product = {
    id: string,
    name: string,
    price: number,
    category: string,
    status: string
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'id',
        header: ({ column }) => {
            return (
                <button
                    className={"flex items-center gap-1"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>ID</span>
                    <FaSort />
                </button>
            )
        },
    },
    {
        accessorKey: 'image',
        header: 'Imagen',
        cell: (cell) => {
            const imageFilePath = cell.getValue();
            return (
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <Image src={`https://api-dev.click2eat.es/${imageFilePath}`} alt={"image product"}
                                   width={25} height={25} unoptimized/>
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        id: 'name',
        accessorKey: 'name',
        header: 'Nombre',
    },
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return (
                <button
                    className={"flex items-center gap-1"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Precio</span>
                    <FaSort />
                </button>
            )
        },
    },
    {
        accessorKey: 'category',
        header: 'Categoría',
    },
    {
        accessorKey: 'status',
        header: 'Estado',
        cell: (cell) => {
            return cell.getValue() === 1 ? 'Activo' : 'Inactivo'
        }
    },
    {
        id: 'actions',
        cell: (_) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <BsThreeDots />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => revalidateContent('/dashboard/home/menu')}>
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Eliminar
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
];