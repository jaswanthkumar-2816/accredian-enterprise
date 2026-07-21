import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ReadingProgressBar } from "@/components/ui/reading-progress";
import { Spotlight } from "@/components/ui/spotlight";
import { BackToTop } from "@/components/ui/back-to-top";
import { ToastContainer } from "@/components/ui/toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | World-Class Workforce Upskilling & AI Transformation",
  description:
    "Redefining enterprise L&D with Linear & Vercel level design polish. Specialized curricula in Generative AI, Product Architecture, Data Science, and Executive Leadership.",
  keywords: [
    "Enterprise Upskilling",
    "Accredian Enterprise",
    "Generative AI Training",
    "Corporate L&D",
    "Product Management Certification",
    "Data Science Executive Program",
  ],
  authors: [{ name: "Accredian Enterprise Product Team" }],
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Workforce Upskilling",
    description: "Architected for Fortune 500 tech leaders & enterprise teams.",
    type: "website",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise",
    description: "Next-Gen Enterprise Upskilling Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${plusJakartaSans.className} antialiased selection:bg-blue-500 selection:text-white bg-white dark:bg-zinc-950 text-slate-900 dark:text-white`}>
        <Providers>
          <ReadingProgressBar />
          <Spotlight />
          {children}
          <BackToTop />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
