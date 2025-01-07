import React from "react";
import StickyBar from "@/components/StickyBar";
import Link from "next/link";
import { PaletteIcon } from "lucide-react";
import { Locale } from "@/types/Locale";
import LanguagePicker from "./components/LanguagePicker";

type Props = Readonly<{
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}>;

function MarketingLayout({ children, params }: Props) {
  return (
    <>
      <StickyBar isStickyTop>
        <nav className="h-full flex items-center justify-between">
          <Link href={`/`} className="text-2xl font-bold">
            <PaletteIcon />
          </Link>

          <LanguagePicker lang={params.lang} />
        </nav>
      </StickyBar>

      {children}
    </>
  );
}

export default MarketingLayout;
