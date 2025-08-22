import type { Metadata } from "next";
import "./globals.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
