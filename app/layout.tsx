import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/ui/theme-switch";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Arrogante | Personal Portfolio",
  description: "Collection of my work throughout my journey as a Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
      <ActiveSectionContextProvider>
        <Header></Header>
        {children}
        <ThemeSwitch />
      </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
