import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EXPROSA — Business Technology Partner",
  description:
    "PT Exprosa Global Nusantara membantu UMKM dan perusahaan skala tumbuh membangun website, aplikasi, automation, dan sistem internal yang rapi.",
  metadataBase: new URL(site.url),
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "EXPROSA — Business Technology Partner",
    description:
      "Teknologi yang bikin bisnis terlihat serius dan bekerja lebih rapi.",
    url: site.url,
    siteName: "EXPROSA",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EXPROSA — Business Technology Partner",
    description:
      "Website, aplikasi, automation, dan sistem internal untuk bisnis yang ingin tumbuh lebih rapi.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
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
