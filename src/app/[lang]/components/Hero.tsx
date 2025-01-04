import { getDictionary } from "@/lib/helpers/dictionaries";
import React from "react";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
};

function Hero({ dictionary }: Props) {
  return (
    <header>
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{dictionary.headline}</h1>
        <p className="text-lg text-muted-foreground">{dictionary.subheading}</p>
      </div>
    </header>
  );
}

export default Hero;
