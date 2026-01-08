import Footer from "@/lib/ui/layout/Footer/Footer";
import Header from "@/lib/ui/layout/Header/Header";
import ButtonLink from "@/lib/ui/shared/ButtonLink";
import type { Metadata } from "next";
import localFont from "next/font/local";
// @ts-ignore
import "./globals.css";

const plush = localFont({
  src: [
    {
      path: "../public/fonts/Plush-Trial-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Plush-Trial-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/Plush-Trial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Plush-Trial-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Plush-Trial-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Plush-Trial-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Plush-Trial-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Plush-Trial-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/Plush-Trial-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Plush-Trial-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Plush-Trial-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Plush-Trial-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/Plush-Trial-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
const SITE_NAME = "https://szczęśliwsi.pl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_NAME),
  title: {
    default: "Fundacja Szczęśliwsi",
    template: "Fundacja Szczęśliwsi | %s",
  },
  alternates: { canonical: "/" },
  description:
    "Zbudujemy zweryfikowaną bazę wiedzy o szczęśliwości, która ułatwi znajdowanie i stosowanie potwierdzonych naukowo metod, które pomogą nam lepiej radzić sobie z wyzwaniami i czerpać większą satysfakcję z życia.",
  openGraph: {
    url: "/",
    type: "website",
    title: "Fundacja Szczęśliwsi",
    description:
      "Zbudujemy zweryfikowaną bazę wiedzy o szczęśliwości…",
    images: [
      {
        url: "/assets/global/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zmieniamy świat rozumiejąc siebie.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundacja Szczęśliwsi",
    description:
      "Zbudujemy zweryfikowaną bazę wiedzy o szczęśliwości…",
    images: ["/assets/global/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/global/favicon-black/favicon-16x16.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/favicon-16x16.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/global/favicon-black/favicon-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/favicon-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/global/favicon-black/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/assets/global/favicon-black/apple-touch-icon.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/global/favicon-white/apple-touch-icon.png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plush.className}  bg-[#fbfbfb] antialiased  mx-auto`}
      >
        <ButtonLink
          className="sr-only focus-visible:not-sr-only focus-visible:inline  focus-visible:fixed focus-visible:top-0 focus-visible:left-0 z-100"
          variant="solid"
          color="blue"
          href="#main"
        >
          Skocz do treści
        </ButtonLink>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
