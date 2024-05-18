import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/Components/Navbar";


export const metadata: Metadata = {
  title: "WedLock",
  description: "This is metromonial website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
