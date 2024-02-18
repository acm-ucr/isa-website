/* eslint-disable new-cap */
import "./globals.css";
import Footer from "@/components/Footer";
import { Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation.jsx";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "ISA UCR",
  description: "Indian Students Association at UCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
