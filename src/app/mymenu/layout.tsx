import type {Metadata} from "next";
import React from "react";
import * as Icons from "react-icons/pi";
const list = [
    {
        icon: 'PiBeerBottle',
        name: 'destacado'
    },
    {
        icon: 'PiBeerBottle',
        name: 'entrantes'
    },
    {
        icon: 'PiBeerBottle',
        name: 'segundo'
    },
    {
        icon: 'PiBeerBottle',
        name: 'bebidas'
    },
    {
        icon: 'PiBeerBottle',
        name: 'menú'
    },
];
interface IconProps {
    name: string
}

const DynamicFaIcon: React.FC<IconProps> = ({name}: { name: string }) => {
    const IconComponent = (Icons as { [index: string]: any })[name]
    if (!IconComponent) {
        return <IconComponent/>;
    }

    return <IconComponent/>;
};
export const metadata: Metadata = {
    title: "Restaurant QR | Menu",
    description: "Generated by create next restaurant",
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="py-3">
            <div className="flex overflow-x-auto overflow-hidden scrollbar-hidden gap-4 py-2 w-screen shadow-md">
                {list.map((item, i) => (
                    //  border-b-2 border-gray-600
                    <a href='#' key={i}
                       className="flex-shrink-0 p-2 flex flex-col items-center w-1/3">
                        {/*<Image src={item.image} alt="Menu Image" width={75} height={75}/>*/}
                        <DynamicFaIcon name={item.icon}/>
                        <p
                            className="text-center mt-2 overflow-hidden">
                            {item.name}
                        </p>
                    </a>
                ))}
            </div>
            {children}
        </div>
    );
}