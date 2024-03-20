import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

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
  return (
    <html lang="en" className={heebo.variable}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
