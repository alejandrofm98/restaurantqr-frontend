'use client'
import {useRouter} from "next/navigation";
import MiddleLeftSide from "@/app/components/auth/middleLeftSide";
import Link from "next/link";
import React, {useState} from "react";
import FormInputText from "@/app/components/form/FormInputText";
import Image from "next/image";
import MiddleRightSide from "@/app/components/auth/middleRigthSide";

export default function AuthRegister() {
    const router = useRouter();
    const [businessName, setBusinessName] = useState<string>('');
    const handleBusinessNameChange = (childData: any) => {
        console.log(childData)
        // setBusinessName(childData);
    }
    return (
        <>
            <MiddleLeftSide>
                <div className="absolute hidden md:flex top-[20%] left-[10%] flex-col">
                    <h1 className="text-4xl text-white font-extrabold my-4">
                        Click2Eat
                    </h1>
                    <p className="text-xl text-white font-normal">
                        Sistema gestión para tu negocio
                    </p>
                </div>
                <Image
                    src="https://placehold.co/750x800"
                    alt=""
                    width={750}
                    height={800}
                    className="w-full h-full object-cover"
                />
            </MiddleLeftSide>
            <MiddleRightSide>
                <div className="w-full flex flex-col">
                    <div className="flex flex-col w-full mb-2">
                        <h3 className="text-3xl font-semibold mb-3">
                            Crear cuenta
                        </h3>
                        {/*<p className="text-base text-gray-600 mb-4">¡Bienvenido otra vez!</p>*/}
                    </div>
                    <div className="w-full flex flex-col">
                        <input
                            type="text"
                            placeholder="Nombre de empresa"
                            onChange={event => console.log(event.target.value)}
                            className="w-full py-3 my-2 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
                        <FormInputText
                            onChange={handleBusinessNameChange}
                            placeholder={"Correo electrónico"}
                            inputType={"text"}
                        />
                        <FormInputText
                            inputType="password"
                            placeholder="************"
                            onChange={handleBusinessNameChange}
                        />
                        <FormInputText
                            inputType="password"
                            placeholder="************"
                            onChange={handleBusinessNameChange}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-500 rounded w-1/2 p-3 text-white font-bold mt-4"
                            type="button">
                            Acceder
                        </button>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <p className="text-sm font-normal text-[#060606]">¿Ya tienes cuenta?
                        <Link href="/dashboard/auth/login"
                              className="ml-1 font-semibold underline underline-offset-2 cursor-pointer">
                            Inicia sesión
                        </Link>
                    </p>
                </div>
            </MiddleRightSide>
        </>
    );
}