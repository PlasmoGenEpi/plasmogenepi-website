import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlasmoGenEpi",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* text-[#E1EAFA] */}
        <main className="min-h-screen bg-white bg-gradient-to-t text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
