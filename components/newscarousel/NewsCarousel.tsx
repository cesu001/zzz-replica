"use client";

import { useEffect, useRef, useState } from "react";
import NewsCarouselSlider from "./NewsCarouselSlider";
import { ChevronRight } from "lucide-react";

const NewsCarousel = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="section-news"
      ref={sectionRef}
      className="relative w-full min-h-[75vw] md:min-h-screen bg-v-stripes bg-size-[20px_20px] overflow-hidden"
    >
      <div className="z-5 absolute top-0 left-0 w-full h-[10vw] bg-black flex flex-nowrap justify-around items-center gap-[1.25vw]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={`block-${i}`} className="w-[3.75vw] h-[3.75vw] bg-white" />
        ))}
      </div>
      <div
        className="z-20 absolute inset-0 bg-white"
        style={{ clipPath: "polygon(0% 0%, 62.5% 0%, 30% 100%, 0% 100%)" }}
      />
      <div
        className={`z-30 absolute top-[30%] md:top-[30%] left-0 md:left-[20%] w-[50%] md:w-[35%] transition-all duration-700 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <NewsCarouselSlider />
      </div>
      <div
        className="z-20 absolute inset-0 bg-white"
        style={{ clipPath: "polygon(0% 30%, 80% 30%, 62.5% 80%, 0% 80%)" }}
      >
        <div className="absolute top-1/2 right-[20vw] md:top-5/12 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-black font-extrabold">
          <h1
            className={`whitespace-nowrap text-[4.7vw] md:text-5xl pt-[0.3vw] md:pt-5 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            新聞資訊
          </h1>
          <p
            className={`text-[1.875vw] transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            NEWS & INFO
          </p>
          <p
            className={`text-[11.7vw] md:text-8xl transition-all duration-700 delay-[800ms] ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            03
          </p>
        </div>
      </div>
      <div
        className="z-20 absolute inset-0 bg-white"
        style={{
          clipPath: "polygon(100% 30%, 100% 30%, 100% 80%,  82.5% 80%)",
        }}
      />
      <button className="w-1/3 z-31 absolute bottom-15 right-4 md:hidden hover:cursor-pointer rounded-4xl flex justify-around items-center gap-0.5 font-medium border-4 border-gray-600 hover:border-black px-3 py-1 bg-black hover:bg-white text-white hover:text-black transition-colors">
        <span>查看更多</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NewsCarousel;
