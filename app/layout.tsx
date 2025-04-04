import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Headers from "@/components/Headers";
import { ClerkProvider, } from '@clerk/nextjs'
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const inter = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VroomGo AI",
  description: "Find Your Perfect Car Match with Intelligent AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          {/* custom header components */}
          <Headers />

          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* Footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
