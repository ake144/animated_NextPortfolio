import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akeja Portfolio App",
  description: "My portfolio Project ",
  ogImageUrl: "https://opengraph.b-cdn.net/production/documents/98a19009-e475-4bd2-89b5-3d37beac7c7d.png?token=FXBvQqrNXxHULGv2-ZbjiB3NZ9AxaHwtgLBN9pt2oSQ&height=500&width=500&expires=33247183118",
};

export default function RootLayout({ children }) {
  const { title, description, ogImageUrl } = metadata;

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://akejadev.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="akejadev.vercel.app" />
        <meta property="twitter:url" content="https://akejadev.vercel.app/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <TransitionProvider>{children}</TransitionProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
