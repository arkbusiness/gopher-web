import type { Metadata } from "next";
import { INTER_CLASS } from "@/styles";
import NextTopLoader from "nextjs-toploader";
import { ARK_META } from "@/constants";
import { Header } from "@/features/navigation";
import "./globals.css";
import { Footer } from "@/components/layouts/footer";
import { Toaster } from "react-hot-toast";
import { ReactQueryClientProvider } from "@/providers";

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
        <NextTopLoader color="var(--primary)" />
        <ReactQueryClientProvider>
          <Header />
          <main className="relative max-w-[1728px] mx-auto">{children}</main>
          <Footer />
        </ReactQueryClientProvider>
        <Toaster
          toastOptions={{
            duration: 6000,
          }}
        />
      </body>
    </html>
  );
}
