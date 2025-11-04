import type { Metadata } from "next";
import { INTER_CLASS } from "@/styles";
import NextTopLoader from "nextjs-toploader";
import { ARK_META } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: ARK_META.title,
  description: ARK_META.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${INTER_CLASS} antialiased`}>
        <NextTopLoader color="var(--tertiary)" />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
