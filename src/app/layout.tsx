import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/feature/Header";
import Footer from "@/components/feature/Footer";
import { basePath } from "@/lib/utils";

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
      <body
        className={`${montserrat.variable} antialiased bg-[url('/${basePath}background.png')]`}
      >
        <div className="container mx-auto border-l-4 border-blue-300 bg-white shadow-lg min-h-screen">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
