import type { Metadata } from "next";
import "./globals.css";
import { LanguageContextProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Language Ai",
  description: "To translate text",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const detectorToken = process.env.NEXT_PUBLIC_DETECTOR_TEST_TOKEN;
  const translatorToken = process.env.NEXT_PUBLIC_TRANSLATOR_TEST_TOKEN;

  return (
    <html lang="en">
      <head>
        {detectorToken && (
          <meta httpEquiv="origin-trial" content={detectorToken} />
        )}
        {translatorToken && (
          <meta httpEquiv="origin-trial" content={translatorToken} />
        )}
      </head>
      <body>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </body>
    </html>
  );
}
