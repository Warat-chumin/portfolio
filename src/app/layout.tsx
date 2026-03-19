import type { Metadata } from "next";
import { Sarabun, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sarabun",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-thai",
});

export const metadata: Metadata = {
  title: "Warat Chumin (Wise) | Fullstack Software Engineer",
  description: "Senior Fullstack Software Engineer with 5+ years of experience specializing in React, Go, and Microservices. Expert in building scalable systems like Fleet Management for 50,000+ vehicles.",
  openGraph: {
    title: "Warat Chumin (Wise) | Fullstack Software Engineer",
    description: "Expert in React, Go, and Microservices. 5+ years experience building scalable systems.",
    type: "website",
    locale: "th_TH",
    siteName: "Warat Chumin Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Warat Chumin (Wise)",
    "url": "https://warat-chumin.dev",
    "jobTitle": "Fullstack Software Engineer",
    "alumniOf": "Prince of Songkla University",
    "gender": "male",
    "sameAs": [
      "https://github.com/Warat-chumin",
      "https://linkedin.com/in/waratchumin"
    ],
    "description": "Senior Fullstack Software Engineer specializing in React, Go, and Microservices."
  };

  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          sarabun.variable,
          notoThai.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-accent/30"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
