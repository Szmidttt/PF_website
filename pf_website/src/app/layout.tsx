import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat} from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";
import Footer from "./ui/footer";

const montserrat = Montserrat({
  subsets: ["latin"]
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pensjonat",
  description: "Wakacje nad morzem",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Nav />
          {children}
        </div>

        <Footer />
      </body>

    </html>
  );
}
