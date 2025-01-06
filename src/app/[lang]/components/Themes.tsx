import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/helpers/dictionaries";
import { createClient } from "@/lib/supabase/server";
import SupabaseUtils from "@/lib/supabase/supabaseUtils";
import { cn } from "@/lib/utils";
import { Locale } from "@/types/Locale";
import { LocalizedFields } from "@/types/supabase/Custom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["themes"];
  lang: Locale;
};

async function Themes({ dictionary, lang }: Props) {
  const supabaseUtils = new SupabaseUtils(createClient());
  const themes = await supabaseUtils.getThemes();

  return (
    <section id="themes" className="space-y-4">
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold">{dictionary.headline}</h2>
        <p className="text-lg text-muted-foreground">{dictionary.subheading}</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map(({ handle, image, localized_fields }, index) => {
          const localizedFields = (localized_fields as LocalizedFields)[lang];
          return (
            <Link key={index} href={`/themes/${handle}/${v4()}`} className="h-full">
              <Card key={index} className="shadow-md hover:shadow-lg transition cursor-pointer h-full flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={supabaseUtils.getThemeImage("themes", image)}
                    alt=""
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover w-full"
                  />
                </CardHeader>
                <CardContent className="p-4 grow flex flex-col gap-y-2">
                  <CardTitle className="">{localizedFields.title}</CardTitle>
                  <p className="text-muted-foreground">{localizedFields.description}</p>

                  <p
                    className={cn(buttonVariants({ variant: "default", size: "default", className: "w-full mt-auto" }))}
                  >
                    {dictionary.customize}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Themes;
