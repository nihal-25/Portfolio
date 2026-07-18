import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.metaTitle,
    description: site.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
