import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-slate-500 min-h-[40px] flex justify-start items-center pl-8">
          <Link href="/"><div>InfoFinder</div></Link>
        </div>
        {children}
        </body>
    </html>
  );
}
