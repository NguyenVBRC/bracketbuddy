import type { Metadata } from "next";
import "./globals.css";

import NavigationBar from "@/components/NavigationBar";

export const metadata: Metadata = {
  title: "Bracket Buddy",
  description: "MOSH Volleyball",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
