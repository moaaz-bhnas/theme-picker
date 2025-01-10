import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getDictionary } from "@/lib/helpers/dictionaries";
import { Locale } from "@/types/Locale";
import { AppSidebar } from "./components/AppSidebar";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeProvider } from "./components/ThemeProvider";
import { createClient } from "@/lib/supabase/server";
import SupabaseUtils from "@/lib/supabase/supabaseUtils";
import { LocalizedFields } from "@/types/supabase/Custom";
import { Tables } from "@/types/supabase/Database";
import { initCustomization } from "./lib/initCustomization";
import { generateCoolName } from "./lib/generateCoolName";
import { getOrCreateCustomization } from "./lib/getOrCreateCustomization";

type Props = {
  children: React.ReactNode;
  params: {
    themeUuid: string;
    customizationUuid: string;
  };
};

export async function generateMetadata() {
  const {
    "customize-layout": { metadata: dict },
  } = await getDictionary(Locale.en);

  return {
    title: {
      default: dict.title.default,
      template: dict.title.template,
    },
    description: dict.description,
  };
}

async function CustomizeLayout({ children, params }: Props) {
  const { themeUuid, customizationUuid } = params;

  const customization = await getOrCreateCustomization(createClient(), customizationUuid, themeUuid);

  if (customization.isErr()) {
    throw new Error(customization.error.message);
  }

  return (
    <ThemeProvider theme={customization.value.themes} customizations={customization.value}>
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
                <h1 className="text-lg font-extrabold tracking-tight">
                  {(customization.value.themes.localized_fields as LocalizedFields)[Locale.en].title}
                </h1>
              </div>
              <div className="flex gap-x-2">
                <Input type="text" value={generateCoolName()} placeholder="Name your theme.." />
                <Button variant="default" type="button">
                  Save
                </Button>
              </div>
            </nav>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default CustomizeLayout;
