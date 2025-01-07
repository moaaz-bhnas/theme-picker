import { getDictionary } from "@/lib/helpers/dictionaries";
import { Locale } from "@/types/Locale";

type Props = {};

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

function CustomizeLayout({}: Props) {
  return <div>CustomizeLayout</div>;
}

export default CustomizeLayout;
