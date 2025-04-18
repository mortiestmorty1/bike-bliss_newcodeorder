
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bike Bliss | Premium Urban Cycling",
  description: "Experience the future of cycling with Bike Bliss.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
