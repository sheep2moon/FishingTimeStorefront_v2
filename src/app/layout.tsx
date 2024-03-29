import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/layout/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Fishing Time",
    description: "Sklep Wędkarski"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
