import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getDictionary } from "@/lib/helpers/dictionaries";
import { Locale } from "@/types/Locale";
import { AppSidebar } from "./components/AppSidebar";
import Link from "next/link";
import { ChevronLeftIcon, PaletteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateCoolName } from "@/lib/helpers/customizationUtils";
import LayoutThemeName from "./components/LayoutThemeName";

type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
    themeUuid: string;
  };
};

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const {
    "customize-layout": { metadata: dict },
  } = await getDictionary(params.lang);

  return {
    title: {
      default: dict.title.default,
      template: dict.title.template,
    },
    description: dict.description,
  };
}

async function CustomizeLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />

          <Separator orientation="vertical" className="mr-2 h-4" />

          <nav className="h-full flex items-center justify-between flex-1">
            <div className="flex gap-x-4 items-center">
              <Link href={`/`} aria-label="back">
                <ChevronLeftIcon />
              </Link>
              <LayoutThemeName />
            </div>
            <div className="flex gap-x-2">
              {/* <Button variant="outline" type="button">
                <PaletteIcon />
                Customize
              </Button> */}
              <Input type="text" value={generateCoolName()} placeholder="Name your theme.." />
              <Button variant="default" type="button">
                Save
              </Button>
            </div>
          </nav>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
      {/* {children} */}
    </SidebarProvider>
  );
}

export default CustomizeLayout;
