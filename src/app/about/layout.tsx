import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";

// const jetbrainsMono \= JetBrains_Mono({
//   variable: "--font-jetbrains-mono",
//   subsets: ["latin"],
// });

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikita Tr3ble",
  description: "Bio of Nikita Tr3ble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
