import React from "react";
import Link from "next/link";
import { PaletteIcon } from "lucide-react";
import { Locale } from "@/types/Locale";
import LanguagePicker from "./components/LanguagePicker";
import { getDictionary } from "@/lib/helpers/dictionaries";
import StickyBar from "./components/StickyBar";
import consts from "@/lib/config/consts";
import isRtl from "@/lib/helpers/isRtl";

type Props = Readonly<{
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}>;

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const {
    "marketing-layout": { metadata: dict },
  } = await getDictionary(params.lang);

  return {
    title: {
      default: dict.title.default,
      template: dict.title.template,
    },
    description: dict.description,
  };
}

export async function generateStaticParams() {
  return consts.LOCALES.map(function formatLangIntoParam(locale) {
    return { lang: locale };
  });
}

function MarketingLayout({ children, params }: Props) {
  return (
    <div lang={params.lang} dir={isRtl(params.lang) ? "rtl" : "ltr"}>
      <StickyBar isStickyTop>
        <nav className="h-full flex items-center justify-between">
          <Link href={`/`} className="text-2xl font-bold">
            <PaletteIcon />
          </Link>

          <LanguagePicker lang={params.lang} />
        </nav>
      </StickyBar>

      {children}
    </div>
  );
}

export default MarketingLayout;
