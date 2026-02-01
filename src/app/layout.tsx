import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard UI",
  description: "Recreation of a premium dashboard design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden relative">
          <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
            <Header />
            <div className="px-8 pb-8">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
