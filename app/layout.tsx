import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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
        <main className=" relative min-h-screen bg-white bg-gradient-to-t text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
