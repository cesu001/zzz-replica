"use client";

import { useState } from "react";
import Image from "next/image";

const PLATFORM_LINKS = [
  { src: "/banner/ps5.png", alt: "PS5", href: "https://www.playstation.com" },
  { src: "/banner/xbox.png", alt: "Xbox", href: "https://www.xbox.com" },
  {
    src: "/banner/hoyoplay.png",
    alt: "HoYoPlay",
    href: "https://hoyoplay.hoyoverse.com",
  },
  {
    src: "/banner/apple.png",
    alt: "App Store",
    href: "https://apps.apple.com",
  },
  {
    src: "/banner/google.png",
    alt: "Google Play",
    href: "https://play.google.com",
  },
  {
    src: "/banner/epic.png",
    alt: "Epic Games",
    href: "https://store.epicgames.com",
  },
];

export default function Banner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* mt-15 / mt-17 clears the fixed header */}
      <section className="bg-neutral-200/50 w-full mt-15 md:mt-10">
        {/* Desktop: left gap matches header's md:px-65; mobile: full-width */}
        <div className="relative md:mx-60">
          {/* Background banner image — natural size, no cropping */}
          <Image
            src="/banner/banner.png"
            alt="Zenless Zone Zero"
            width={1920}
            height={1080}
            className="w-full h-auto rounded"
            priority
          />

          {/* leftOver — bottom-left; slightly higher on mobile */}
          <div className="absolute bottom-1/2 left-5 md:bottom-1/3 md:left-15">
            <Image
              src="/banner/leftOver.png"
              alt="Zenless Zone Zero"
              width={30}
              height={200}
              className="h-20 md:h-36 w-auto"
            />
          </div>

          {/* Play button — desktop: vertical center, left side */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block group absolute top-1/3 left-16 -translate-y-1/2 cursor-pointer"
            aria-label="Play PV"
          >
            <Image
              src="/banner/play.png"
              alt="Play"
              width={80}
              height={80}
              className="w-15 h-15 invert group-hover:invert-0 transition-all duration-300"
            />
          </button>

          {/* Play button — mobile: vertical center, right edge as white rounded-left tag */}
          <button
            onClick={() => setModalOpen(true)}
            className="md:hidden group absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer bg-white rounded-l-full px-1 py-1 pr-4"
            aria-label="Play PV"
          >
            <Image
              src="/banner/play.png"
              alt="Play"
              width={40}
              height={40}
              className="w-9 h-9 invert group-hover:filter-none transition-all duration-300"
            />
          </button>

          {/* Download badge — top-right, desktop only, scales + shakes on hover */}
          <a
            href="#"
            className="download-badge hidden md:inline-block absolute top-15 right-14"
          >
            <Image
              src="/banner/downloadRN.png"
              alt="立即下載"
              width={180}
              height={72}
              className="h-40 w-auto"
            />
          </a>

          {/* Platform icons — bottom-right, desktop only */}
          <div className="hidden absolute bottom-7/24 right-10 md:grid grid-cols-1 gap-1">
            <div className="flex justify-end gap-1">
              <Image
                src="/banner/steam.png"
                alt="Steam"
                width={140}
                height={70}
                className="h-17 w-auto"
              />
            </div>
            <div className="flex flex-nowrap gap-1">
              <a>
                <Image
                  src="/banner/qrcode.png"
                  alt="qrcode"
                  width={80}
                  height={80}
                  className="h-18 w-auto"
                />
              </a>
              <div className="hidden md:grid grid-cols-3 gap-1 max-w-md">
                {PLATFORM_LINKS.map((p) => (
                  <a
                    key={p.alt}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={140}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center bg-black/50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-4xl aspect-video px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/5SQ3fC2urZg?autoplay=1"
              title="Zenless Zone Zero PV"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
}
