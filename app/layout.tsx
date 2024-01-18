import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
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
      {/* <body>
        <main
          className={`${poppins.variable} ${roboto.variable} text-black bg-zinc-50`}
        >
          {children}
        </main>
      </body> */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              console.log('dark');
              document.documentElement.classList.add('dark')
            } else {
              console.log('light');
              document.documentElement.classList.remove('dark')
            }
          } catch (_) {}`,
          }}
        ></script>
      </head>
      <body>
        <main
          className={`${poppins.variable} ${roboto.variable} text-black bg-zinc-50 dark:bg-pge-darkest-blue dark:text-[#e2e2e2]`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
