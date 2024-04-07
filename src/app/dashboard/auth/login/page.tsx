'use client'
import React, {useState} from "react";
import {login} from '@/_request/auth/auth'
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MiddleLeftSide from "@/app/components/auth/middleLeftSide";
import MiddleRightSide from "@/app/components/auth/middleRigthSide";
import FormInputText from "@/app/components/form/FormInputText";
import {MdEmail, MdLock} from "react-icons/md";

interface FormInputProps {
    name: string;
    password: string;
}

export default function AuthLogin() {
    const [loginError, setLoginError] = useState<string | null>(null)
    const router = useRouter();
    const [formData, setFormData] = useState<FormInputProps>({
        name: '',
        password: ''
    });

    function handle(e: React.ChangeEvent<HTMLInputElement>) {
        const newFormData = {...formData};
        newFormData[e.target.name as keyof FormInputProps] = e.target.value;
        setFormData(newFormData);
    }

    const submit = async () => {
        try {
            await login(formData.name, formData.password);
            router.push('/dashboard/home');
        } catch (error) {
            setLoginError('Something went wrong!');
        }
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
            {/*bg-[#E0E0E0]*/}
            <MiddleRightSide>
                <h1 className="text-xl font-semibold text-[#060606]">
                    [Nombre Empresa]
                </h1>
                <div className="w-full flex flex-col">
                    <div className="flex flex-col w-full mb-2">
                        <h3 className="text-3xl font-semibold mb-3 text-black">
                            Iniciar Sesión
                        </h3>
                        <p className="text-base text-gray-600 mb-4">¡Bienvenido otra vez!</p>
                    </div>
                    <div className="w-full flex gap-3 flex-col">

                        {loginError === null ? null : <p className="text-xs text-red-500 ml-2">{loginError}</p>}

                        <FormInputText
                            icon={<MdEmail/>}
                            inputType={"text"}
                            placeholder={"Nombre de usuario"}
                            onChange={handle}
                        />
                        <FormInputText
                            icon={<MdLock/>}
                            placeholder={"Contraseña"}
                            inputType={"password"}
                            onChange={handle}
                        />
                    </div>
                    <div className="form-control flex-row items-center justify-between">
                        <label className="label cursor-pointer justify-start gap-3">
                            <span className="label-text">Recuérdame</span>
                            <input type="checkbox" defaultChecked className="checkbox"/>
                        </label>
                        <span>
                            ¿Problemas para iniciar sesión?
                        </span>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={submit}
                            className="bg-indigo-600 hover:bg-indigo-500 rounded w-1/2 p-3 text-white font-bold mt-4"
                            type="button">
                            Acceder
                        </button>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <p className="text-sm font-normal text-[#060606]">¿No tienes cuenta?
                        <Link href="/dashboard/auth/register"
                              className="ml-1 font-semibold underline underline-offset-2 cursor-pointer">
                            Registrate
                        </Link>
                    </p>
                </div>
            </MiddleRightSide>
        </>
    );
}
