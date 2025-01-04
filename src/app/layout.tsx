import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Theme Picker",
    template: "%s | Theme Picker",
  },
  description:
    "Discover customizable eCommerce themes designed for performance, accessibility, and SEO. Choose Minimalist, Bold & Dynamic, or Classic styles to enhance your store's experience.",
  keywords: [
    "eCommerce platform",
    "customizable themes",
    "SEO-friendly eCommerce",
    "responsive design",
    "minimalist theme",
    "bold dynamic layouts",
    "classic templates",
    "fast online stores",
    "accessible eCommerce websites",
    "Next.js eCommerce",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
