import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components"


export const metadata: Metadata = {
  title: "car ninja ",
  description: "Generate a design about shpping car with api",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="relative max-w-[1440px] mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
