import React from "react";
import Header from "@/modules/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
