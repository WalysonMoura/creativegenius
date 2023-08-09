import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { ToasterProvider } from "@/providers/toaster-provider";
import { ModalProvider } from "@/providers/modal-provider";

import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Creativa Genius",
  description: "AI Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //<ClerkProvider>
    <html lang="pt-br" suppressHydrationWarning>
      <body className={font.className}>
        {/* <ToasterProvider />
      
       <ModalProvider />* */}
        {children}
      </body>
    </html>
    //</ClerkProvider>
  );
}
