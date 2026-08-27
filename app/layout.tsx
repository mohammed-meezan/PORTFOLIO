import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} - MERN Stack Developer | Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Portfolio of ${siteConfig.name}, a BCA student and MERN Stack Developer building modern full-stack web applications and AI solutions.`,
  keywords: [
    "Mohammed Meezan Afzal",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "BCA 2026",
    "Mysore Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} - MERN Stack Developer | Portfolio`,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - MERN Stack Developer | Portfolio`,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-brand-purple/30 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              className:
                "dark:bg-zinc-900 dark:text-zinc-100 bg-white text-zinc-900 border border-zinc-200 dark:border-zinc-800",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
