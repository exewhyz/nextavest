"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type TestimonialItem = {
  quote: string;
  name: string;
  title: string;
};

type LogoItem = {
  logo: string;
  name: string;
  isDark?: boolean;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  type = "testimonials",
}: {
  items: TestimonialItem[] | LogoItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  type?: "testimonials" | "logos";
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {type === "logos"
          ? (items as LogoItem[]).map((item, idx) => (
              <li
                className="relative flex items-center justify-center w-[180px] h-[100px] shrink-0 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/20"
                key={`${item.name}-${idx}`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={160}
                    height={70}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </li>
            ))
          : (items as TestimonialItem[]).map((item, idx) => (
              <li
                className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                key={`${item.name}-${idx}`}
              >
                <blockquote>
                  <div
                    aria-hidden="true"
                    className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            ))}
      </ul>
    </div>
  );
};
