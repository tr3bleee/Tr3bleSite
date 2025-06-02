import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import ClientBody from "./ClientBody";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio • @tr3ble",
    description: "Hello! I'm a Tr3ble. I'm a software engineer with a passion for building things that live on the internet. I am currently focused on building accessible, human-centered products and experiences.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ClientBody>{children}</ClientBody>
        <SpeedInsights />
        <Analytics />
        </html>
    );
}
