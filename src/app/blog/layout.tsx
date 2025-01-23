import { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Blog",
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
        className={`${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
