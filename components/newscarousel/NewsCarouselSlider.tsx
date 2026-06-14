"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import { news } from "@/lib/db/carousel";

const NewsCarouselSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const formatDate = (dateStr: string) => dateStr.replace(/-/g, "/");

  return (
    <div className="w-full p-4">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="ml-0">
          {news.map((item) => (
            <CarouselItem key={item.id} className="pl-0">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:cursor-pointer"
                  sizes="55vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="hidden md:block mt-2 px-1">
        <p className="text-[1.1vw] text-black font-bold">
          {formatDate(news[current].date)}
        </p>
        <p className="text-[1.3vw] font-bold text-black leading-snug mt-0.5">
          {news[current].title}
        </p>
      </div>

      <div className="flex items-center justify-between mt-3 px-1">
        <div className="flex items-center gap-[2vw] md:gap-[1.2vw]">
          {news.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`hover:cursor-pointer rounded-full w-3 h-3 md:w-[1.2vw] md:h-[1.2vw] border-2 md:border-4 border-black transition-all duration-300 ${
                i === current ? "bg-[#c8ff00]" : "bg-black"
              }`}
            />
          ))}
        </div>
        <button className="hidden hover:cursor-pointer rounded-4xl md:flex items-center gap-0.5 text-[1.2vw] font-medium border-2 md:border-4 border-gray-600 hover:border-black px-[1vw] md:px-[1.5vw] py-[0.4vw] bg-black hover:bg-white text-white hover:text-black transition-colors">
          <span>查看更多</span>
          <ChevronRight className="w-[1.5vw] h-[1.5vw]" />
        </button>
      </div>
    </div>
  );
};

export default NewsCarouselSlider;
