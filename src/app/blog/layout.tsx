import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikita Tr3ble",
  description: "Blog of Nikita Tr3ble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
