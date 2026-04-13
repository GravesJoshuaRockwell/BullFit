import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BullFit Apparel - Premium Gym & Swim Wear",
  description: "Fortune Favors the Bulls. Premium gym and swim apparel from BullFit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
