import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fallcon's",
  description: "A website about fallcon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="R_ySoIu2oKs_b31JCv7joZE6bWwksD8XIT2QkGGpBDU"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
