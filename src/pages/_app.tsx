// src/pages/_app.tsx
import type { AppProps } from "next/app";
import RootLayout from "@/layouts/RootLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
