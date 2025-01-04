import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <header>
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Build Your Dream Store</h1>
        <p className="text-lg text-muted-foreground">
          Discover customizable, performance-driven themes built for SEO, responsiveness, and accessibility.
        </p>
      </div>
    </header>
  );
}

export default Hero;
