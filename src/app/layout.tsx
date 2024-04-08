import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NavBar } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

type RootLayoutGroupPorps = {
  children: ReactNode;
};
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Projeto para aumentar sua produtividade no desenvolvimento frontend em Next.js",
};

export default function RootLayout({ children }: RootLayoutGroupPorps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body 
        className={jetbrains.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
