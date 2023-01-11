import "../styles/globals.css";

import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
