import { getDictionary } from "@/lib/helpers/dictionaries";
import { Locale } from "@/types/Locale";
import Link from "next/link";
import StickyBar from "./components/StickyBar";
import { createClient } from "@/lib/supabase/server";
import SupabaseUtils from "@/lib/supabase/supabaseUtils";
import { ArrowLeftFromLineIcon, ChevronLeftIcon, PaletteIcon } from "lucide-react";
import { LocalizedFields } from "@/types/supabase/Custom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateCoolName } from "@/lib/helpers/customizationUtils";

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

async function CustomizeLayout({ children, params }: Props) {
  const supabaseUtils = new SupabaseUtils(createClient());
  const theme = await supabaseUtils.getTheme(params.themeUuid);

  return (
    <>
      <header>
        <StickyBar isStickyTop>
          <nav className="h-full flex items-center justify-between px-4">
            <div className="flex gap-x-4 items-center">
              <Link href={`/`} aria-label="back">
                <ChevronLeftIcon />
              </Link>

              <h1 className="text-lg font-extrabold tracking-tight">
                {(theme?.localized_fields as LocalizedFields)[params.lang].title}
              </h1>
            </div>

            <div className="flex gap-x-2">
              <Button variant="default" type="button">
                <PaletteIcon />
                Customize
              </Button>
              {/* <Input type="text" value={generateCoolName()} placeholder="Name your theme.." />
              <Button variant="default" type="button">
                Save
              </Button> */}
            </div>
          </nav>
        </StickyBar>
      </header>

      {children}
    </>
  );
}

export default CustomizeLayout;
