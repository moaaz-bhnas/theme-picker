import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { getDictionary } from "@/lib/helpers/dictionaries";
import { Locale } from "@/types/Locale";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const {
    "home-page": { metadata: dict },
  } = await getDictionary(params.lang);

  return {
    title: dict.title,
    description: dict.description,
  };
}

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function Home({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Container>
        <Hero dictionary={dict.hero} />
      </Container>

      <Container className="!p-0">
        <Separator />
      </Container>

      <main>
        <Container>
          <Features dictionary={dict.features} />
        </Container>
      </main>
    </>
  );
}
