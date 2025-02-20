import type { Metadata } from "next";
import "./globals.css";
import {LanguageContextProvider} from "@/context/LanguageContext";


export const metadata: Metadata = {
  title: "Language Ai",
  description: "to translate text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </body>
    </html>
  );
}
