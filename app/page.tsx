"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { nanoid } from "nanoid";
import { Services } from "@/lib/services";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={Services} />
      </div>
    </>
  );
}
