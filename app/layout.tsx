import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";
import StoreProvider from "@/components/layout/StoreProvider/StoreProvider";

const heebo = Heebo({
  subsets: ["latin"],
  variable: '--main-font',
  weight: ['400', '500', '600', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Test task blog with login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<StoreProvider>
    <html lang="en" className={heebo.variable}>
      <body>

        {children}
      </body>
    </html>
  </StoreProvider>
  );
}
