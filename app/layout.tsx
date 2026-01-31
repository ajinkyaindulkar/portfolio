import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { resume } from "@/data/resume";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: resume.meta.title,
  description: resume.meta.description,
  keywords: resume.meta.keywords,
  authors: [{ name: resume.personal.name }],
  creator: resume.personal.name,
  metadataBase: new URL("https://ajinkya-indulkar.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ajinkya-indulkar.github.io/ajinkya-portfolio",
    title: resume.meta.title,
    description: resume.meta.description,
    siteName: `${resume.personal.name} Portfolio`,
    images: [
      {
        url: resume.meta.ogImage,
        width: 1200,
        height: 630,
        alt: resume.meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: resume.meta.title,
    description: resume.meta.description,
    images: [resume.meta.ogImage],
    creator: "@ajinkya_indulkar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
