import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rung Standings",
  description: "Gaming style dashboard for Rung standings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}