import type { AppProps } from "next/app";
import RootLayout from "@/layouts/RootLayout";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
      <Analytics /> 
    </SessionProvider>
  );
}
