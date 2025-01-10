import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat, Nunito, Comfortaa } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ['400', '500', '700'],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['400', '500', '600', '700'],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ['400', '500', '600', '700'],
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "mahlen.dev",
  description: "read about me here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} 
        ${geistMono.variable} 
        ${roboto.variable} 
        ${montserrat.variable} 
        ${nunito.variable} 
        ${comfortaa.variable} 
        antialiased bg-[#c9daecda]`}
      >
        {children}
      </body>
    </html>
  );
}
