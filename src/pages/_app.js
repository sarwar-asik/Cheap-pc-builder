import RootLayout from "@/components/layout/RootLayout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps:{session,...pageProps} }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
     {/* { getLayout(<Component {...pageProps} />)} */}
     <RootLayout>
     <Component {...pageProps} />
     </RootLayout>
    </SessionProvider>
  );
}
