import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {  ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
// import Header from "@/components/landing/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Care Connect",
  description: "Connecting care providers and patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <Header /> */}
          {children}
          <Toaster richColors position='top-center' />
        </body>
      </html>
    </ClerkProvider>
  );
}
