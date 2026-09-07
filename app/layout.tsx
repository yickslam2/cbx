import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中商匯 CBX — 組織章程與運作機制",
  description: "Central Business Exchange 組織章程與運作機制規範",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
