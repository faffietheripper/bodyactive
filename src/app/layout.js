import "./globals.css";
import { Permanent_Marker } from "next/font/google";

const quicksand = Permanent_Marker({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Body Active Media",
  description: "The first step into the future of sports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
