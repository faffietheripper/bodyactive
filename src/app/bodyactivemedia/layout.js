import MediaNav from "@/components/MediaNav/MediaNav";
import "../globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Body Active Media",
  description: "The first step into the future of sports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <MediaNav />
      </body>
    </html>
  );
}
