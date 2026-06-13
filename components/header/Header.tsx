"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Link } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black overflow-visible">
      <div className="flex items-center h-15 md:h-17 px-4 md:px-65">
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
            className={`block md:hidden absolute top-0 mt-3 h-22 w-auto object-contain origin-top transition-all duration-500 ${
              scrolled ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
            }`}
            priority
          />
          <Image
            src="/header/logo_large.png"
            alt="Zenless Zone Zero"
            height={96}
            width={80}
            className={`hidden md:block absolute top-0 mt-5 h-40 w-auto object-contain origin-top transition-all duration-500 ${
              scrolled ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"
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
        <nav className="hidden md:flex items-center h-full gap-5 ml-1">
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
        <div className="hidden md:flex items-center h-full gap-12">
          <button className="bg-[#c8ff00] text-black font-extrabold px-5 py-1.5 rounded-full text-sm hover:brightness-110 transition-all cursor-pointer">
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
        <div className="flex md:hidden items-center">
          <Image
            src="/header/download_rwd.png"
            alt="立即下載"
            height={44}
            width={140}
            className="h-9 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
}
