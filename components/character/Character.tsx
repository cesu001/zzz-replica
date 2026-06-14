"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { characters } from "../../lib/db/characters";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Character = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [animState, setAnimState] = useState<"idle" | "exiting">("idle");
  const [mounted, setMounted] = useState(false);
  const activeChar = characters[displayIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setAnimState("exiting");
    const timer = setTimeout(() => {
      setDisplayIndex(activeIndex);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimState("idle");
        });
      });
    }, 250);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const charIn = animState === "idle";
  const charShow = visible && charIn;
  const charCls = `transition-all duration-300 ${charShow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`;
  const charClsFar = `transition-all duration-300 ${charShow ? "opacity-100 translate-x-0" : "opacity-0 translate-x-48"}`;

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[75vw] md:min-h-[120vh] bg-v-stripes bg-size-[20px_20px] overflow-hidden"
    >
      {/* White top band */}
      <div className="absolute top-0 left-0 w-full h-[10vw] bg-neutral-100" />

      {/* Decorative white squares bar */}
      <div className="z-5 absolute top-[10vw] left-0 w-full h-[10vw] bg-black flex flex-nowrap justify-around items-center gap-[1.25vw]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`block-${i}`} className="w-[3.75vw] h-[3.75vw] bg-white" />
        ))}
      </div>

      {/* White diagonal right overlay */}
      <div
        className="z-20 absolute inset-0 bg-white"
        style={{ clipPath: "polygon(60% 0%, 100% 0%, 100% 100%, 20% 100%)" }}
      />

      {/* Yellow-green left accent with title */}
      <div
        className="z-20 absolute inset-0 bg-[#c8ff00]"
        style={{ clipPath: "polygon(0% 40%, 35% 40%, 20% 80%, 0% 80%)" }}
      >
        <div className="absolute top-2/5 left-[8vw] md:left-[15vw] text-black font-extrabold">
          <h1
            className={`text-[4.7vw] md:text-5xl pt-[0.3vw] md:pt-5 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            角色介紹
          </h1>
          <p
            className={`text-[1.875vw] transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            CHARACTERS
          </p>
          <p
            className={`text-[11.7vw] md:text-8xl transition-all duration-700 delay-[800ms] ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            02
          </p>
        </div>
      </div>

      {/* Watermark name */}
      <div
        className={`absolute top-[20vw] left-0 w-full text-[25vw] font-bold text-neutral-600/50 leading-none translate-y-[-12%] ${charClsFar}`}
      >
        {activeChar.name_en}
      </div>

      {/* Black band */}
      <div className="z-22 absolute top-[80%] left-0 w-full h-[20%] bg-black" />

      {/* Character carousel — client-only */}
      {mounted && (
        <div className="z-24 absolute top-[80%] left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[37.5vw] pointer-events-auto rounded-full bg-neutral-800 py-[0.94vw]">
            <Carousel
              opts={{ slidesToScroll: 3 }}
              className="w-full px-[5.5vw]"
            >
              <CarouselContent className="ml-0">
                {characters.map((char, i) => (
                  <CarouselItem key={char.id} className="pl-0 basis-1/3">
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`relative w-full overflow-hidden transition-all duration-200 ${
                        activeIndex === i ? "" : "opacity-60 hover:opacity-90"
                      }`}
                    >
                      <Image
                        src={char.head}
                        alt={char.name}
                        width={161}
                        height={60}
                        className="w-full h-auto object-cover block"
                        priority={true}
                      />
                      {activeIndex === i && (
                        <Image
                          src="/characters/ch_overlay.png"
                          alt=""
                          width={161}
                          height={60}
                          className="absolute inset-0 w-full h-auto object-cover pointer-events-none"
                        />
                      )}
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[1.5vw] w-[3.5vw] h-[3.5vw] bg-neutral-700 border-0 text-white hover:bg-neutral-600 hover:text-white hover:scale-110 active:scale-110 -translate-y-1/2! active:translate-y-[-50%] cursor-pointer transition-transform" />
              <CarouselNext className="right-[1.5vw] w-[3.5vw] h-[3.5vw] bg-neutral-700 border-0 text-white hover:bg-neutral-600 hover:text-white hover:scale-110 active:scale-110 -translate-y-1/2! active:translate-y-[-50%] cursor-pointer transition-transform" />
            </Carousel>
          </div>
        </div>
      )}

      {/* White stretch */}
      <div
        className="z-23 absolute inset-0 bg-white"
        style={{ clipPath: "polygon(0% 80%, 20% 80%, 12.5% 100%, 0% 100%)" }}
      />

      {/* Belong image */}
      <div className="z-25 absolute bottom-[20%] right-0 w-2/5">
        <div className={charCls}>
          <Image
            src={activeChar.b_img}
            alt={activeChar.belong}
            width={960}
            height={960}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Character image */}
      <div
        className="z-30 absolute bottom-[20%] -translate-x-1/2 w-2/3"
        style={{ left: activeChar.offsetX }}
      >
        <div className={charCls}>
          <Image
            src={activeChar.image}
            alt={activeChar.name}
            width={960}
            height={960}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Character name overlay */}
      <div className="z-31 absolute right-0 bottom-1/2 w-full px-[10vw] flex flex-col text-black font-extrabold items-end">
        <p className={`text-[2.34vw] ${charCls}`}>{activeChar.belong}</p>
        <h1 className={`text-[4.7vw] ${charClsFar}`}>{activeChar.name}</h1>
      </div>
    </div>
  );
};

export default Character;
