import localFont from "@next/font/local";

const helveticaNeue = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueLTStd-Md.woff",
      weight: "400",
    },
    {
      path: "../../public/fonts/HelveticaNeueLTStd-Bd.woff",
      weight: "700",
    },
  ],
  variable: "--font-helvetica",
});

export default function InteractiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={`${helveticaNeue.variable} font-helvetica`}>
          {children}
        </main>
      </body>
    </html>
  );
}
