"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HeavenDoors } from "./HeavenDoors";

/**
 * A deliberate "Enter the Temple" action: on click the heaven's doors open,
 * then the user is taken through them to `href`. User-triggered, so the
 * cinematic reveal never becomes intrusive.
 */
export function EnterTempleButton({
  href = "/shop",
  children = "Enter the Temple",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  return (
    <>
      <Button
        variant="gold"
        size="md"
        onClick={() => {
          if (opening) return;
          router.prefetch?.(href);
          setOpening(true);
          document.body.style.overflow = "hidden";
        }}
      >
        {children}
      </Button>

      {opening && (
        <HeavenDoors
          open
          onOpened={() => {
            document.body.style.overflow = "";
            router.push(href);
          }}
        />
      )}
    </>
  );
}
