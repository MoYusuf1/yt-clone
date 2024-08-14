import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopNavigation from "@/components/TopNavigation";
import { FooterMenu } from "@/components/FooterMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyTube",
  description: "Youtube Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className="(inter.className)">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="pt-0">{children}</main>
            <TopNavigation/>
            <FooterMenu/>
          </ThemeProvider>
        </body>
      </html>
  )
}
