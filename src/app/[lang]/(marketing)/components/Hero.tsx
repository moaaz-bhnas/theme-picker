import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/lib/helpers/dictionaries";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
};

function Hero({ dictionary }: Props) {
  return (
    <header>
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{dictionary.headline}</h1>
        <p className="text-lg text-muted-foreground">{dictionary.subheading}</p>
        <Link className={cn(buttonVariants({ variant: "default", size: "default", className: "" }))} href="#themes">
          {dictionary.cta}
        </Link>
      </div>
    </header>
  );
}

export default Hero;
