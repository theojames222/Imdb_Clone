import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is a movie database clone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
