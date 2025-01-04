import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AccessibilityIcon, Languages, LayoutIcon, MonitorSmartphone, ScanSearchIcon, ZapIcon } from "lucide-react";

type Props = {};

const features = [
  {
    title: "Performance",
    description: "Built with Next.js for speed, scalability, and modern performance.",
    Icon: ZapIcon,
  },
  {
    title: "SEO",
    description: "Search engine optimization baked into every design.",
    Icon: ScanSearchIcon,
  },
  {
    title: "Responsiveness",
    description: "Optimized for all devices—mobile, tablet, and desktop.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Web Accessibility",
    description: "Ensuring inclusivity with designs that comply with accessibility standards.",
    Icon: AccessibilityIcon,
  },
  {
    title: "UX Principles",
    description: "User-focused designs ensuring smooth and intuitive interactions.",
    Icon: LayoutIcon,
  },
  {
    title: "Multi-language Support",
    description: "Easily localize content to cater to a global audience.",
    Icon: Languages,
  },
];

function Features({}: Props) {
  return (
    <section className="space-y-4">
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold">Powerful Features for Every Theme</h2>
        <p className="text-lg text-muted-foreground">Designed to deliver exceptional performance and usability.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition">
            <CardHeader>
              <div className="flex items-center space-x-4">
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
}

export default Features;
