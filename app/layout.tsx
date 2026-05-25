import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {Header} from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import { ScrollToTop } from "@/components/base/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // Grab the heavy weights for your headings
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "YouthClimate Connect",
  description: "YouthClimate Connect official site for climate action and youth empowerment.",
  icons: {
    icon: "/ycc-logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <Script
          src="https://widgets.givebutter.com/latest.umd.cjs?acct=uJAJlLBbfcSxG4ME&p=other"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <ScrollToTop/>
      </body>
    </html>
  );
}
