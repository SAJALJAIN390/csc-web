import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Correct Steps | Engineering & Robotics Solutions",
  description: "Specialized in problem-solving robotics and automation for industrial and defense sectors.",
  icons: {
    icon: "/assets/csc_logo1.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}