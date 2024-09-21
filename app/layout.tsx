import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const thunderSans = localFont({
  src: [
    {
      path: "../public/fonts/thunder-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/thunder.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/thunder-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-thunder-sans",
});

export const metadata: Metadata = {
  title: "Ahmet | Front End Developer",
  description:
    "Experienced Front End Developer with a focus on React and JavaScript, who thrives on building engaging and effective web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={thunderSans.className}>{children}</body>
    </html>
  );
}
