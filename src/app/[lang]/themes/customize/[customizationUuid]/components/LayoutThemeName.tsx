"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { getThemeName } from "../lib/getThemeName";

type Props = {};

function LayoutThemeName({}: Props) {
  const pathname = usePathname();
  const themeName = getThemeName(pathname);

  return <h1 className="text-lg font-extrabold tracking-tight">{themeName}</h1>;
}

export default LayoutThemeName;
