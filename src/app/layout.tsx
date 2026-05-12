import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const garamond = EB_Garamond({ 
  subsets: ["latin"],
  variable: '--font-garamond'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Nexoresha Tales",
  description: "Luxury wedding films and photography crafted with emotion, elegance, and cinematic storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${garamond.variable} ${inter.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
