import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Restaurant QR | Panel",
    description: "Generated by create next restaurant",
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const responsiveBreakpoint: string = "sm:bg-indigo-500 md:bg-red-600 lg:bg-green-300 xl:bg-blue-600 2xl:bg-gray-800";
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}