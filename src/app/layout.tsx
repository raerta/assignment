import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@/../theme";
import SideBar from "@/components/Navigation/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RMOS ASSIGNMENT",
  description: "Generated by create next app",
};

export const fetchCache = 'force-no-store'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/next.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <main className="flex justify-end">
            <SideBar />
            <div className="xl:w-5/6 w-full pl-2 pt-4 overflow-hidden">
              {children}
            </div>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
