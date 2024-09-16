import type { Metadata } from "next";
import { Poppins, Roboto, Overpass } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import FullscreenImage from "./components/Images/FullscreenImage";

const overpass = Overpass({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-overpass",
});

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueLTStd-Md.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/HelveticaNeueLTStd-Bd.woff",
      weight: "700",
    },
  ],
  variable: "--font-helvetica",
});

const metadata: Metadata = {
  title: "PlasmoGenEpi",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>{" "}
      <body>
        <main
          className={`${poppins.variable} ${roboto.variable} ${overpass.variable} ${helveticaNeue.variable} `}
        >
          {/* <FullscreenImage /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
