import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamad Pervaiz — Serial Entrepreneur, Angel Investor & Tech CEO",
  description:
    "Hamad Pervaiz is a serial entrepreneur, angel investor, and technology leader. CEO of BearPlex, Co-founder of Turing Venture Capital, and Ex-Advisor to the Prime Minister of Pakistan on Science & Technology.",
  openGraph: {
    title: "Hamad Pervaiz — Serial Entrepreneur, Angel Investor & Tech CEO",
    description:
      "CEO of BearPlex | Co-founder Turing VC | Angel Investor | Ex-Advisor to PM Pakistan on Sci & Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
