import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhedge Michael Navarro",
  description: "Resume Web Page by Rhedge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="container border-l-5 border-blue-300 bg-white ">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
