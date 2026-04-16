import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const geist = Geist({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Andy Mutale — Frontend Engineer",
  description:
    "Frontend engineer with five years building production interfaces, component systems, and the pipelines behind them.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${geist.variable}`}>
        {children}
      </body>
    </html>
  );
}
