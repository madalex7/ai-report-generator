import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Property Reports",
  description: "AI-assisted property report generation with human review.",
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
