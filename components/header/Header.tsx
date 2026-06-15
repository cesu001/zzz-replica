"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Link, Menu, X } from "lucide-react";
import {
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaTwitch,
  FaTelegram,
  FaRedditAlien,
} from "react-icons/fa6";
import { SiBilibili } from "react-icons/si";

const NAV_ITEMS = [
  { label: "首頁", active: true },
  { label: "角色介紹", active: false },
  { label: "新聞資訊", active: false },
  { label: "設定資料", active: false },
];

const MORE_ITEMS = ["兌換碼", "儲值", "攻略"];

const FOLLOW_ITEMS = [
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  SiBilibili,
  FaTwitch,
  FaTelegram,
  FaRedditAlien,
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      requestAnimationFrame(() => setMobileNavVisible(true));
    }
  }, [mobileNavOpen]);

  const closeNav = () => setMobileNavVisible(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black overflow-visible">
      <div className="flex items-center h-15 lg:h-17 px-4 lg:px-10 xl:px-65">
        {/* Logo */}
        <div
          className={`relative shrink-0 flex h-full 
          ${scrolled ? "items-center" : "items-start"}`}
        >
          {/* Large logos — absolute so they don't affect flex alignment */}
          <Image
            src="/header/logo_large_rwd.png"
            alt="Zenless Zone Zero"
            height={96}
            width={80}
            className={`block lg:hidden absolute top-0 mt-3 h-22 w-auto object-contain origin-top transition-all duration-500 ${
              scrolled
                ? "opacity-0 scale-75 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
            priority
          />
          <Image
            src="/header/logo_large.png"
            alt="Zenless Zone Zero"
            height={96}
            width={80}
            className={`hidden lg:block absolute top-0 mt-5 h-40 w-auto object-contain origin-top transition-all duration-500 ${
              scrolled
                ? "opacity-0 scale-75 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
            priority
          />
          {/* Small logo — in flow, opacity only */}
          <Image
            src="/header/logo.png"
            alt="Zenless Zone Zero"
            height={40}
            width={160}
            className={`h-10 w-auto object-contain mr-6 transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            priority
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center h-full gap-5 ml-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`w-22 py-1.5 rounded-full text-sm font-extrabold text-center transition-all duration-500 cursor-pointer
                ${
                  item.active
                    ? "bg-white text-black scale-110"
                    : "text-gray-400 hover:bg-white hover:text-black hover:scale-105"
                }`}
            >
              {item.label}
            </button>
          ))}

          {/* 更多 dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="w-22 py-1.5 rounded-full text-sm font-extrabold text-center text-gray-400 cursor-pointer flex items-center justify-center gap-1">
              更多
              <span
                className={`inline-block transition-transform duration-200 ${moreOpen ? "rotate-180" : "rotate-0"}`}
              >
                ▾
              </span>
            </button>
            {moreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 w-36 bg-[#111111] border-t-4 border-[#c8ff00] rounded-t-sm">
                {MORE_ITEMS.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center justify-between px-5 py-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex-1" />

        {/* Desktop right */}
        <div className="hidden lg:flex items-center h-full gap-12">
          <button className="shrink-0 bg-[#c8ff00] text-black font-extrabold px-5 py-1.5 rounded-full text-sm hover:brightness-110 transition-all cursor-pointer">
            立即下載
          </button>

          {/* 追蹤我們 dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setFollowOpen(true)}
            onMouseLeave={() => setFollowOpen(false)}
          >
            <button className="text-white transition-colors cursor-pointer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
            {followOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 w-32 bg-[#111111] border-t-4 border-[#c8ff00] rounded-t-sm">
                <p className="text-white text-sm font-black text-center py-3">
                  追蹤我們
                </p>
                <div className="grid grid-cols-2 gap-y-4 px-4 pb-5">
                  {FOLLOW_ITEMS.map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex justify-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                  <a
                    href="#"
                    className="col-span-2 flex justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Link size={20} />
                  </a>
                </div>
              </div>
            )}
          </div>

          <button className="text-white transition-colors cursor-pointer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>

        {/* Mobile right */}
        <div className="flex hover:cursor-pointer lg:hidden items-center">
          <Image
            src="/header/download_rwd.png"
            alt="立即下載"
            height={44}
            width={140}
            className="h-9 w-auto object-contain"
          />
        </div>
        <button
          onClick={() => setMobileNavOpen(true)}
          className="rounded-xl fixed right-4 top-24 lg:hidden w-18 h-18 bg-black p-3 flex justify-center items-center cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={40} className="text-white" />
        </button>
      </div>

      {/* Mobile nav overlay — always mounted, visibility driven by mobileNavVisible */}
      <div
        className={`fixed top-0 left-0 right-0 min-h-[50vh] z-200 bg-[#111111] flex flex-col lg:hidden transition-[opacity,clip-path] duration-350 ease-in-out ${
          mobileNavVisible
            ? "opacity-100 [clip-path:inset(0_0_0%_0)] pointer-events-auto"
            : "opacity-0 [clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
        onTransitionEnd={(e) => {
          if (e.propertyName === "opacity" && !mobileNavVisible) {
            setMobileNavOpen(false);
          }
        }}
      >
        {mobileNavOpen ? (
          <>
            {/* Top row — X button only */}
            <div className="flex items-center justify-end px-6 pt-4 pb-2">
              <button
                onClick={closeNav}
                className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  className={`w-10/12 py-4 rounded-full text-xl font-bold text-center cursor-pointer transition-colors ${
                    item.active ? "bg-white/15 text-white" : "text-neutral-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* 更多 sub-dropdown */}
              <div className="w-10/12">
                <button
                  onClick={() => setMobileMoreOpen((o) => !o)}
                  className="w-full py-4 text-neutral-400 text-xl font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  更多
                  <span
                    className={`transition-transform duration-200 ${mobileMoreOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${mobileMoreOpen ? "max-h-40" : "max-h-0"}`}
                >
                  {MORE_ITEMS.map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="flex items-center justify-center gap-2 py-2 text-neutral-400 hover:text-white transition-colors text-base"
                    >
                      {label}
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            {/* Bottom login */}
            <div className="mt-5 px-6 pb-10">
              <button className="w-full py-4 rounded-full bg-[#c8ff00] text-black font-extrabold text-xl cursor-pointer">
                登入
              </button>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
