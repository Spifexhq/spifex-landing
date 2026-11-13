"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Reset the document scroll on client-side route changes. The site uses
 * `scroll-behavior: smooth`, which otherwise makes the router's scroll reset
 * stop part-way when navigating from long pages such as Legal.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}
