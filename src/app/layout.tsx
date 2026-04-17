import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { SlideProvider } from "@/context/SlideContext";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Dubai Mall | Partner With The World's Most Visited Destination",
  description:
    "100 million annual visitors. 1,300+ retail brands. 1M+ sq ft of entertainment. Discover unparalleled leasing, sponsorship, and event opportunities at The Dubai Mall.",
  keywords:
    "Dubai Mall, retail leasing, brand sponsorship, events, luxury retail, mall advertising",
  openGraph: {
    title: "The Dubai Mall — A World Stage for Iconic Brands",
    description:
      "Partner with the world's most visited mall. Explore leasing, events, and sponsorship opportunities.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <SlideProvider>
          <SmoothScroll />
          {children}
        </SlideProvider>
      </body>
    </html>
  );
}
