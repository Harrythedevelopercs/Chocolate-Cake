import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SANFINC — Digital Solutions, Web Development & IT Services",
  description:
    "Fast, affordable, and scalable digital solutions for startups, SMEs, and enterprises. U.S.-registered technology partner delivering custom web apps, mobile solutions, cloud infrastructure, and cybersecurity.",
  keywords: [
    "Web Development",
    "IT Services",
    "Next.js Development",
    "Mobile Apps",
    "Cloud DevOps",
    "Cybersecurity",
    "SANFINC",
  ],
  authors: [{ name: "SANFINC" }],
  openGraph: {
    title: "SANFINC — Digital Solutions, Web Development & IT Services",
    description:
      "Revolutionizing the way brands connect, engage, & grow online. Fast, affordable, and scalable digital solutions.",
    url: "https://sanfinc.com/",
    siteName: "SANFINC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#f8faf9] text-[#0f172a] antialiased selection:bg-[#1ea84b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
