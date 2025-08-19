import "./globals.css";
import { Inter } from "next/font/google"; // if you also use Google fonts

export const metadata = {
  title: "Techies Hub",
  description: "Community platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Clash Grotesk CDN from Fontshare */}
        <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-clash w-full">
        {children}
      </body>
    </html>
  );
}
