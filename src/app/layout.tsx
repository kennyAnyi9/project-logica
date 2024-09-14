import { Background } from "@/components/background";
import { cn } from "@/lib/utils";
import { inter, satoshi } from "@/styles/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Logica",
  description: "An alternative to Project Euler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(satoshi.variable, inter.variable)}>
        <Background />
        {children}
      </body>
    </html>
  );
}
