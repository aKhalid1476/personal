import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishav Agarwal - Portfolio",
  description: "Full-Stack Developer & AI Engineer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-gray-300 selection:bg-gray-800`}
      >
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-24 border-x border-white/5 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
