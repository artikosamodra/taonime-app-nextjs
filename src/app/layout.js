import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taonime App",
  description: "Website Anime by TAO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
