import type { Metadata, Viewport } from "next";
import { company } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agkfire.com"),
  title: {
    default: `${company.name} — Software & Media Company`,
    template: `%s · ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "AGK Fire Inc",
    "software company Melbourne Florida",
    "media company",
    "education technology",
    "digital publishing",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agkfire.com",
    siteName: company.name,
    title: `${company.name} — Software & Media Company`,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Software & Media Company`,
    description: company.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070b18",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}