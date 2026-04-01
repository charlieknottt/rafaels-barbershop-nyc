import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafael's Barbershop Vintage | East Village NYC",
  description:
    "Classic barbershop experience in the East Village, NYC. Expert haircuts, beard trims, signature shaves, and grooming with a vintage touch.",
  keywords: ["barbershop", "haircut", "East Village NYC", "beard trim", "shave", "vintage barbershop", "New York barber"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
