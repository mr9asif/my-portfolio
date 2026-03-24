import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} flex justify-center`}>
        <div className="w-full max-w-[1500px] px-4">
          {children}
        </div>
      </body>
    </html>
  );
}