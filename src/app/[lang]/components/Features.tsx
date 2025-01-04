import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AccessibilityIcon, Languages, LayoutIcon, MonitorSmartphone, ScanSearchIcon, ZapIcon } from "lucide-react";

import { getDictionary } from "@/lib/helpers/dictionaries";

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["features"];
};

const Features = ({ dictionary }: Props) => {
  const features = [
    {
      title: dictionary.performance.title,
      description: dictionary.performance.description,
      Icon: ZapIcon,
    },
    {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      Icon: ScanSearchIcon,
    },
    {
      title: dictionary.responsiveness.title,
      description: dictionary.responsiveness.description,
      Icon: MonitorSmartphone,
    },
    {
      title: dictionary.accessibility.title,
      description: dictionary.accessibility.description,
      Icon: AccessibilityIcon,
    },
    {
      title: dictionary.ux.title,
      description: dictionary.ux.description,
      Icon: LayoutIcon,
    },
    {
      title: dictionary.multiLanguage.title,
      description: dictionary.multiLanguage.description,
      Icon: Languages,
    },
  ];

  return (
    <section className="space-y-4">
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold">{dictionary.headline}</h2>
        <p className="text-lg text-muted-foreground">{dictionary.subheading}</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition">
            <CardHeader>
              <div className="flex items-center gap-x-4">
                <Icon className="h-6 w-6" />
                <CardTitle>{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
