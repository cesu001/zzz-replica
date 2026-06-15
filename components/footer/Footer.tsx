"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import {
  FaXTwitter,
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaRedditAlien,
} from "react-icons/fa6";
import { SiBilibili } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SOCIAL_LINKS = [
  { Icon: FaYoutube },
  { Icon: FaFacebook },
  { Icon: FaXTwitter },
  { Icon: FaInstagram },
  { Icon: FaDiscord },
  { Icon: FaTiktok },
  { Icon: SiBilibili },
  { Icon: FaTelegram },
  { Icon: FaRedditAlien },
];

const LEGAL_LINKS = ["隱私政策", "服務條款", "版權聲明", "未成年人保護"];

const Footer = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-white border-t border-gray-800">
      {/* Go-to-top tag — absolute, hangs down from top border */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 xl:left-64 xl:translate-x-0 flex flex-col items-center gap-0.5 xl:gap-1 bg-white text-black font-bold text-sm xl:text-2xl uppercase px-4 py-2 xl:px-8 xl:py-4 rounded-b-xl xl:rounded-b-2xl hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
      >
        <ChevronUp className="w-4 h-4 md:w-8 md:h-8 shrink-0" />
        <span>回到頂部</span>
      </button>
      <div className="hidden px-4 pt-10 py-2 xl:flex flex-col justify-around items-center gap-3 font-extrabold">
        <h2 className="text-4xl">搶先預約享好禮</h2>
        <p className="text-lg">300 菲林 + 代理人養成禮包</p>
      </div>
      {/* dummy */}
      <div className="xl:hidden block w-full h-10"></div>

      {/* Pre-registration form — right-aligned */}
      <div className="hidden absolute top-0 right-0 xl:flex xl:flex-col xl:justify-between gap-4 px-8 xl:px-16 pt-20 xl:pt-10">
        <div className="flex flex-1 flex-col gap-4 w-full max-w-xs">
          <input
            type="tel"
            placeholder="手機號碼"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl bg-transparent border border-gray-600 text-white text-sm placeholder-gray-500 px-4 py-2.5 focus:outline-none focus:border-[#c8ff00] transition-colors duration-200"
          />
          <input
            type="email"
            placeholder="電子信箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl bg-transparent border border-gray-600 text-white text-sm placeholder-gray-500 px-4 py-2.5 focus:outline-none focus:border-[#c8ff00] transition-colors duration-200"
          />
        </div>
        <label className="flex items-center pl-1 gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 accent-[#c8ff00] shrink-0"
          />
          <span className="text-gray-500 text-sm leading-relaxed">
            我已閱讀並同意{" "}
            <a
              href="#"
              className="text-gray-300 underline hover:text-white transition-colors"
            >
              服務條款
            </a>
          </span>
        </label>
        <button
          disabled={!agreed}
          className="w-1/2 rounded-2xl bg-[#c8ff00] self-center text-black font-bold text-sm py-2.5 tracking-widest hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        >
          立即預約
        </button>
      </div>
      <Dialog>
        <DialogTrigger className="absolute top-2 left-3/4 xl:hidden hover:cursor-pointer hover:bg-white hover:border-[#c8ff00] hover:scale-105 w-12 h-12 lg:w-20 lg:h-20 flex flex-col justify-center items-center rounded-full text-black text-xs lg:text-xl font-bold bg-[#c8ff00] border-3 border-white transition-all duration-200">
          <span>事前</span>
          <span>預約</span>
        </DialogTrigger>
        <DialogContent className="bg-black border border-gray-700 text-white max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="text-white flex flex-col gap-2 items-center text-lg font-bold tracking-wide">
              <p className="text-2xl">搶先預約享好禮</p>
              <p>300 菲林 + 代理人養成禮包</p>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-2">
            <input
              type="tel"
              placeholder="手機號碼"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-xl bg-transparent border border-gray-600 text-white text-sm placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-[#c8ff00] transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="電子信箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl bg-transparent border border-gray-600 text-white text-sm placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-[#c8ff00] transition-colors duration-200"
            />
            <label className="pl-1 flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 accent-[#c8ff00] shrink-0"
              />
              <span className="text-gray-500 text-xs leading-relaxed">
                我已閱讀並同意{" "}
                <a
                  href="#"
                  className="text-gray-300 underline hover:text-white transition-colors"
                >
                  服務條款
                </a>
              </span>
            </label>
            <button
              disabled={!agreed}
              className="rounded-2xl bg-[#c8ff00] text-black font-bold text-sm py-3 tracking-widest hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              立即預約
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main content */}
      <div className="px-8 md:px-16 pt-10 pb-10 flex flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-5">
          {SOCIAL_LINKS.map(({ Icon }, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              <Icon className="w-4.5 h-4.5 md:w-7 md:h-7" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-xl h-px bg-gray-800" />

        {/* Legal links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-gray-300 text-xs transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-700 text-xs text-center leading-relaxed">
          © 2025 ZZZ. LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
