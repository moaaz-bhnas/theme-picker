import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary } from "@/lib/helpers/dictionaries";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["themes"];
};

function Themes({ dictionary }: Props) {
  const themes = [
    {
      id: "minimal",
      name: dictionary.minimalist.title,
      description: dictionary.minimalist.description,
      link: `/themes/minimalist/${v4()}`,
    },
    {
      id: "bold",
      name: dictionary.boldDynamic.title,
      description: dictionary.boldDynamic.description,
      link: `/themes/bold-dynamic/${v4()}`,
    },
    {
      id: "classic",
      name: dictionary.classic.title,
      description: dictionary.classic.description,
      link: `/themes/classic/${v4()}`,
    },
  ];

  return (
    <section id="themes" className="space-y-4">
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold">{dictionary.headline}</h2>
        <p className="text-lg text-muted-foreground">{dictionary.subheading}</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map(({ id, name, description, link }, index) => (
          <Link key={index} href={link}>
            <Card key={index} className="shadow-md hover:shadow-lg transition cursor-pointer h-full flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={`/images/themes/theme-${id}.jpg`}
                  alt=""
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover w-full"
                />
              </CardHeader>
              <CardContent className="p-4 grow flex flex-col gap-y-2">
                <CardTitle className="">{name}</CardTitle>
                <p className="text-muted-foreground">{description}</p>

                <p className={cn(buttonVariants({ variant: "default", size: "default", className: "w-full mt-auto" }))}>
                  {dictionary.customize}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Themes;
