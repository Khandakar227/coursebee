import Navbar from "@/components/common/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/common/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
