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
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="origin-trial"
          content="AsXoU7wJWmSW9vhe7Wn4o4H3BhaSJts7pqFkkjzFTa5PIsJDXn6FB7GFT3Ge3Q7QWlfZbtPE/g7HxHIh0XC6gAIAAAB4eyJvcmlnaW4iOiJodHRwczovL2xhbmctYWktb3BhbC52ZXJjZWwuYXBwOjQ0MyIsImZlYXR1cmUiOiJMYW5ndWFnZURldGVjdGlvbkFQSSIsImV4cGlyeSI6MTc0OTU5OTk5OSwiaXNTdWJkb21haW4iOnRydWV9"
        />
      </head>
      <body>
        <LanguageContextProvider>{children}</LanguageContextProvider>
      </body>
    </html>
  );
}
