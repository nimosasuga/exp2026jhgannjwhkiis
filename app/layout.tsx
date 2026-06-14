import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EXPROSA — Business Technology Partner",
  description:
    "PT Exprosa Global Nusantara membantu UMKM dan perusahaan skala tumbuh membangun website, aplikasi, automation, dan sistem internal yang rapi.",
  metadataBase: new URL("https://exprosa.com"),
  openGraph: {
    title: "EXPROSA — Business Technology Partner",
    description:
      "Teknologi yang bikin bisnis terlihat serius dan bekerja lebih rapi.",
    url: "https://exprosa.com",
    siteName: "EXPROSA",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
