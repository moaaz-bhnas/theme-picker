import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover customizable eCommerce themes designed for performance, accessibility, and SEO. Choose Minimalist, Bold & Dynamic, or Classic styles to enhance your store's experience.",
};

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
      </Container>

      <Container className="!p-0">
        <Separator />
      </Container>

      <main>
        <Container>
          <Features />
        </Container>
      </main>
    </>
  );
}
