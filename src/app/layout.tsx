import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Репетитор по китайскому и английскому | Егинян Артур",
  description: "Индивидуальные занятия по китайскому и английскому: реальная практика общения и переговоров, обучение с нуля. Первое занятие бесплатно. От 1500 руб/час. 100+ учеников, 6 лет опыта.",
  keywords: [
    "репетитор по китайскому",
    "репетитор по английскому",
    "китайский язык",
    "английский язык",
    "HSK 1-4",
    "деловой китайский",
    "разговорный китайский",
  ],
  authors: [{ name: "Егинян Артур" }],
  creator: "Егинян Артур",
  publisher: "Егинян Артур",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://same-228gzkhba51-latest.netlify.app",
    title: "Репетитор по китайскому и английскому | Егинян Артур",
    description: "Индивидуальные занятия по китайскому и английскому: реальная практика общения и переговоров, обучение с нуля. Первое занятие бесплатно. От 1500 руб/час.",
    siteName: "Репетитор по китайскому и английскому - Артур Егинян",
  },
  twitter: {
    card: "summary_large_image",
    title: "Репетитор по китайскому и английскому | Егинян Артур",
    description: "Индивидуальные занятия по китайскому и английскому. Первое занятие бесплатно!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
