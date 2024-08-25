import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import "./globals.css";

import SessionProvider from "./components/sessionprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ranting for People",
  description: "Rant to Your Heats Content",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}
