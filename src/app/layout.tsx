import type { Metadata } from "next";
import { outfit } from "../app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Izabelle Wilding - Frontend Software Engineer",
  description: "Welcome to my portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
