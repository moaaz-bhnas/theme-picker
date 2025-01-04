import Container from "@/components/containers/Container";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Build Your Dream Store
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Discover customizable, performance-driven themes built for SEO, responsiveness, and accessibility.
          </p>
        </Container>
      </header>

      <Container className="!p-0">
        <Separator />
      </Container>
    </>
  );
}
