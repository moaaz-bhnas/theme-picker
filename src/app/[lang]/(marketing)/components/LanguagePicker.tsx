"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { find, matchesProperty, negate } from "lodash";
import { Locale } from "@/types/Locale";

const languages = [
  {
    code: Locale.en,
    name: "English",
  },
  {
    code: Locale.ar,
    name: "العربية",
  },
];

type Props = {
  lang: Locale;
};

function LanguagePicker({ lang }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(lang: Locale) {
    return function handle() {
      const href = (function getHref() {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = lang;
        return segments.join("/");
      })();

      router.push(href);
    };
  }

  const otherLanguage = find(languages, negate(matchesProperty("code", lang))) || languages[0];

  return (
    <Button size={"sm"} variant={"outline"} onClick={handleClick(otherLanguage.code)}>
      {otherLanguage.name}
    </Button>
  );
}

export default LanguagePicker;
