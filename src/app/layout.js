import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Utilities/Navbar";
import Footer from "./component/Utilities/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Taonime App",
  description: "Website Anime by TAO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} `} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
