import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar, Footer} from "./api/route/route"
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Property",
  description: "Rental property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-right" />
            <Navbar />
            {children}
            <Footer />
          </body>
      </html>
    </AuthProvider>
  );
}
