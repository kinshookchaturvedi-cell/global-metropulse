import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global MetroPulse",
  description: "Real-time dashboard tracking global metro rail projects and news",
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
