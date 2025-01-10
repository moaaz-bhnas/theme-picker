import localFont from "next/font/local";
import "../globals.css";
import consts from "@/lib/config/consts";
import isRtl from "@/lib/helpers/isRtl";

import { Locale } from "@/types/Locale";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateStaticParams() {
  return consts.LOCALES.map(function formatLangIntoParam(locale) {
    return { lang: locale };
  });
}

type Props = Readonly<{
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}>;

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang} dir={isRtl(params.lang) ? "rtl" : "ltr"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
