import { useState, useEffect, useRef } from "react";
import svgPaths from "@/imports/Html→Body-1/svg-9p0v258dil";
import imgBackgroundOrnaments from "@/imports/Html→Body-1/8d96bc711f0882781b1d7150beb7c69977023eed.png";
import imgBalineseLotusIcon from "@/imports/Html→Body-1/773d5b91a0fddb9de907364ea8389d22192e13fd.png";
import imgDecorativeIcon from "@/imports/Html→Body-1/83c92fe5df0c0bb79bfb88815d2fa6fd9dfcd8c8.png";
import imgFloralCover from "@/imports/Html→Body-1/floral.png";

const TARGET_DATE = new Date("2026-08-05T09:00:00+08:00");

function useCountdown() {
  const calc = () => {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const s = Math.floor(diff / 1000);
    return {
      days: Math.floor(s / 86400),
      hours: Math.floor((s % 86400) / 3600),
      minutes: Math.floor((s % 3600) / 60),
      seconds: s % 60,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function LotusDivider() {
  return (
    <div className="flex gap-[16px] items-center justify-center w-full">
      <div className="bg-[rgba(148,118,92,0.3)] h-px w-[48px]" />
      <div className="opacity-60 size-[32px] relative shrink-0">
        <img alt="" className="absolute left-0 size-full top-0" src={imgBalineseLotusIcon} />
      </div>
      <div className="bg-[rgba(148,118,92,0.3)] h-px w-[48px]" />
    </div>
  );
}

function GoogleMapsButton({ href = "#", icon }: { href?: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fcc83f] hover:bg-[#fbbd25] transition-colors duration-200 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[8px] w-full flex gap-[8px] items-center justify-center py-[12px] no-underline cursor-pointer"
    >
      {icon}
      <span className="font-['Manrope',sans-serif] font-bold text-[#715b00] text-[14px] leading-[20px] tracking-[1px]">
        BUKA DI GOOGLE MAPS
      </span>
    </a>
  );
}

type Section = "invitation" | "schedule" | "location";

function FloralCornerSVG() {
  return (
    <svg viewBox="0 0 150 150" fill="none" className="w-full h-full text-[#94765c]/60">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Rose (approx cx=75, cy=75) */}
        <circle cx="75" cy="75" r="8" />
        <circle cx="75" cy="75" r="3" fill="currentColor" />

        {/* Petals of Central Rose */}
        {/* Top Petal */}
        <path d="M75 67c-12-15-2-22 0-22s12 7 0 22z" />
        {/* Right-Top Petal */}
        <path d="M81 70c15-12 22-2 22 0s-7 12-22 0z" />
        {/* Right-Bottom Petal */}
        <path d="M79 79c12 15 2 22 0 22s-12-7 0-22z" />
        {/* Left-Bottom Petal */}
        <path d="M69 77c-15 12-22 2-22 0s7-12 22 0z" />
        {/* Left-Top Petal */}
        <path d="M69 70c-15-12-12-22-10-22s10 10 10 22z" />

        {/* Additional overlapping petal contours for hand-drawn look */}
        <path d="M75 50c12 5 18 15 10 23" />
        <path d="M95 75c-5 12-15 18-23 10" />
        <path d="M75 95c-12-5-18-15-10-23" />
        <path d="M55 75c5-12 15-18 23-10" />

        {/* Small Rose Left-Bottom (approx cx=45, cy=85) */}
        <circle cx="45" cy="85" r="5" />
        <path d="M45 80c-8-8 0-12 0-12s8 4 0 12z" />
        <path d="M49 87c6 6 10 0 10 0s-4-8-10 0z" />
        <path d="M41 87c-6 6 0 10 0 10s8-4-0-10z" />
        <path d="M39 81c-6-6-10 0-10 0s4 8 10 0z" />

        {/* Small Rose Right-Top (approx cx=100, cy=45) */}
        <circle cx="100" cy="45" r="5" />
        <path d="M100 40c-8-8 0-12 0-12s8 4 0 12z" />
        <path d="M104 47c6 6 10 0 10 0s-4-8-10 0z" />
        <path d="M96 47c-6 6 0 10 0 10s8-4-0-10z" />
        <path d="M94 41c-6-6-10 0-10 0s4 8 10 0z" />

        {/* Radiating Leaves */}
        {/* Top Leaf Branch */}
        <path d="M75 45c0-15 10-25 15-35-5 15-15 20-15 35z" />
        <path d="M75 45c-10-10-15-25-10-35 5 15 10 25 10 35z" />
        <path d="M80 30l8-5M70 28l-8-5" />

        {/* Bottom Leaf Branch */}
        <path d="M75 105c0 15-10 25-15 35 5-15 15-20 15-35z" />
        <path d="M75 105c10 10 15 25 10 35-5-15-10-25-10-35z" />
        <path d="M70 120l-8 5M80 122l8 5" />

        {/* Left Leaf Branch */}
        <path d="M45 75c-15 0-25-10-35-15 15 5 20 15 35 15z" />
        <path d="M45 75c-10 10-25 15-35 10 15-5 25-10 35-10z" />
        <path d="M30 70l-5-8M28 80l-5 8" />

        {/* Right Leaf Branch */}
        <path d="M105 75c15 0 25 10 35 15-15-5-20-15-35-15z" />
        <path d="M105 75c10-10 25-15 35-10-15 5-25 10-35 10z" />
        <path d="M120 70l5-8M122 80l5 8" />

        {/* Corner Leaf Clusters */}
        <path d="M50 50c-15-15-10-30-5-40 0 15 5 25 5 40z" />
        <path d="M50 50c-15 5-30 10-40 5 15-5 25-5 40-5z" />

        <path d="M100 100c15 15 10 30 5 40 0-15-5-25-5-40z" />
        <path d="M100 100c15-5 30-10 40-5-15 5-25 5-40 5z" />
      </g>
    </svg>
  );
}

/**
 * Fades children in from below when they enter the viewport.
 * Pass `enabled={isOpen}` so observation only starts after the cover is dismissed.
 */
function FadeIn({
  children,
  delay = 0,
  enabled = true,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  enabled?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 700ms ease-out ${visible ? delay : 0}ms, transform 700ms ease-out ${visible ? delay : 0}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const { days, hours, minutes, seconds } = useCountdown();
  const [active, setActive] = useState<Section>("invitation");
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [guestName, setGuestName] = useState("Kamu");
  const [isMounted, setIsMounted] = useState(false);

  const invRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const ytPlayerRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);

    // 1. Try to get name from pathname (e.g. /John+Doe)
    let path = window.location.pathname;
    if (path.startsWith("/")) {
      path = path.substring(1);
    }
    if (path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    if (path && path !== "index.html") {
      try {
        const decoded = decodeURIComponent(path).replace(/\+/g, " ");
        if (decoded.trim()) {
          setGuestName(decoded);
          return;
        }
      } catch (e) {
        console.error("Failed to decode pathname:", e);
      }
    }

    // 2. Fallback to query parameter (e.g. ?to=John+Doe)
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to") || params.get("guest");
    if (to) {
      setGuestName(to);
    }
  }, []);

  // Load YouTube IFrame API — container lives in document.body, OUTSIDE React's DOM
  // so React reconciliation never conflicts with what the YT API does to the element.
  useEffect(() => {
    const container = document.createElement("div");
    container.style.cssText =
      "position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;overflow:hidden;";
    document.body.appendChild(container);

    const initPlayer = () => {
      ytPlayerRef.current = new (window as any).YT.Player(container, {
        videoId: "jJpYnEZxRW0",
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          end: 290,
          loop: 0,
          modestbranding: 1,
          rel: 0,
          start: 0,
          origin: window.location.origin,
        },
        events: {
          onStateChange: (event: any) => {
            if (event.data === 0) {
              ytPlayerRef.current?.seekTo(0, true);
              ytPlayerRef.current?.playVideo();
            }
          },
        },
      });
    };

    const yt = (window as any).YT;
    if (yt && yt.Player) {
      initPlayer();
    } else if (!document.getElementById("yt-api-script")) {
      const tag = document.createElement("script");
      tag.id = "yt-api-script";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      try { ytPlayerRef.current?.destroy(); } catch (_) { }
      ytPlayerRef.current = null;
      container.remove();
    };
  }, []);

  // Start music when user opens the invitation (user gesture = autoplay allowed)
  useEffect(() => {
    if (!isOpen) return;
    let retries = 0;
    const tryPlay = () => {
      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === "function") {
        ytPlayerRef.current.playVideo();
      } else if (retries < 20) {
        retries++;
        setTimeout(tryPlay, 300);
      }
    };
    tryPlay();
  }, [isOpen]);

  function scrollTo(section: Section) {
    setActive(section);
    const map: Record<Section, React.RefObject<HTMLDivElement | null>> = {
      invitation: invRef,
      schedule: scheduleRef,
      location: locationRef,
    };
    map[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className="min-h-screen flex justify-center bg-[#fdfbf7]"
    >
      <div className={`relative w-full max-w-[390px] bg-[#fdfbf7] overflow-hidden ${isUnlocked ? "pb-[120px]" : "h-screen"}`}>

        {/* ── COVER PAGE ── */}
        <div
          className={`absolute inset-0 z-50 flex flex-col justify-between p-[36px] bg-[#f5efe4] transition-all duration-[1200ms] ease-in-out ${isOpen
            ? "transform -translate-y-8 opacity-0 pointer-events-none"
            : isMounted
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-4 opacity-0"
            }`}
        >
          {/* Double Golden Border */}
          <div className="absolute inset-[24px] border border-[#94765c]/65 rounded-[2px] pointer-events-none" />
          <div className="absolute inset-[29px] border border-[#94765c]/45 rounded-[2px] pointer-events-none" />

          {/* Corner Flowers */}
          <div className="absolute top-[-10px] left-[-10px] w-[140px] h-[140px] opacity-80 pointer-events-none">
            <img src={imgFloralCover} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute bottom-[-10px] right-[-10px] w-[140px] h-[140px] rotate-180 opacity-80 pointer-events-none">
            <img src={imgFloralCover} alt="" className="w-full h-full object-contain" />
          </div>

          {/* Top Spacing / Balancer */}
          <div className="h-[60px]" />

          {/* Cover Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-[16px] my-auto">
            <p className="font-['EB_Garamond',serif] text-[18px] tracking-[1.5px] text-[#94765c] opacity-90 m-0">
              Undangan Mepandes
            </p>
            <h1 className="font-['EB_Garamond',serif] text-[38px] font-normal text-[#72573f] mt-[16px] mb-[32px] tracking-[0.5px] leading-tight m-0">
              Putri &amp; Tasya
            </h1>

            <p className="font-['Manrope',sans-serif] text-[11px] font-bold tracking-[1.5px] uppercase text-[#94765c] m-0">
              KEPADA BAPAK/IBU/SAUDARA/I
            </p>

            <div className="font-['EB_Garamond',serif] text-[30px] font-normal text-[#72573f] mt-[12px] mb-[36px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
              {guestName}
            </div>

            <button
              onClick={() => {
                setIsOpen(true);
                setTimeout(() => {
                  setIsUnlocked(true);
                }, 1200);
              }}
              className="bg-[#614d3f] hover:bg-[#4f3e32] text-white px-[36px] py-[12px] rounded-full font-['Manrope',sans-serif] font-bold text-[13px] tracking-[2px] uppercase transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] active:scale-95 cursor-pointer border-none"
            >
              BUKA UNDANGAN
            </button>
          </div>

          {/* Bottom Spacing / Balancer */}
          <div className="h-[60px]" />
        </div>

        {/* ── MAIN CONTENT WRAPPER ── */}
        <div
          className={`w-full relative transition-all duration-[1000ms] ease-out ${isOpen ? "opacity-100 translate-y-0 delay-[300ms]" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
          {/* Background ornaments — top band */}
          <div
            className="absolute top-0 left-0 right-0 h-[700px] opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: `url("${imgBackgroundOrnaments}")`, backgroundSize: "512px 512px" }}
          />

          {/* ── HEADER / INVITATION ── */}
          <div ref={invRef} className="flex flex-col items-center px-[24px] pt-[29px] gap-[20px]">

            {/* Om decorative icon */}
            <FadeIn enabled={isOpen} delay={0}>
              <div className="flex items-center justify-center w-full">
                <div className="opacity-40 size-[48px] relative shrink-0">
                  <img alt="" className="absolute h-full left-[-3.44%] max-w-none top-0 w-[106.89%]" src={imgDecorativeIcon} />
                </div>
              </div>
            </FadeIn>

            {/* "Om Swastiastu" heading */}
            <FadeIn enabled={isOpen} delay={100}>
              <div className="w-full text-center px-[32px]">
                <p className="font-['EB_Garamond',serif] font-normal text-[#72573f] text-[24px] leading-[40px] tracking-[-0.9px] m-0">
                  "Om Swastiastu"
                </p>
              </div>
            </FadeIn>

            {/* Italic blessing quote */}
            <FadeIn enabled={isOpen} delay={200}>
              <div className="w-full text-center px-[32px]">
                <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[16px] leading-[26px] m-0">
                  "Atas asung kertha wara nugraha
                </p>
                <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[16px] leading-[26px] m-0">
                  Ida Sang Hyang Widhi Wasa"
                </p>
              </div>
            </FadeIn>

            {/* Invitation paragraph */}
            <FadeIn enabled={isOpen} delay={300}>
              <div className="w-full text-center">
                <p className="font-['EB_Garamond',serif] font-normal text-[#1d1b18] text-[14px] leading-[22.75px] m-0">
                  Kami bermaksud mengundang Bapak/Ibu/Saudara/i pada Upacara Manusa Yadnya Mepandes (Potong Gigi) Putri - Putri kami.
                </p>
              </div>
            </FadeIn>

            {/* Names */}
            <FadeIn enabled={isOpen} delay={400}>
              <div className="flex flex-col gap-[8px] items-center w-full mt-[10px]">
                <div className="w-full text-center">
                  <p className="font-['EB_Garamond',serif] font-normal text-[#72573f] text-[30px] leading-[36px] tracking-[-0.5px] m-0">
                    Luh Putri Yuniari
                  </p>
                </div>
                <div className="w-full text-center">
                  <p className="font-['EB_Garamond',serif] font-normal text-[#94765c] text-[20px] leading-[24px] m-0">
                    &amp;
                  </p>
                </div>
                <div className="w-full text-center">
                  <p className="font-['EB_Garamond',serif] font-normal text-[#72573f] text-[30px] leading-[36px] tracking-[-0.5px] m-0">
                    Ni Kadek Tasya Purnamadewi
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── VERSE SECTION (Bhagavad Gita) ── */}
          <FadeIn enabled={isOpen} className="flex flex-col items-start gap-[23px] px-[24px] pt-[40px] pb-[44px]">
            <LotusDivider />

            <div className="w-full px-[16px] flex flex-col gap-[16px]">
              <div className="text-center w-full">
                <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[14px] leading-[22.75px] m-0">
                  Devan bhavayatanena te deva bhavayantu vah
                </p>
                <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[14px] leading-[22.75px] m-0">
                  parasparam bhavayantah sreyah param avapsyatha
                </p>
              </div>
              <div className="text-center w-full">
                <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[14px] leading-[22.75px] m-0">
                  (Bhagavad Gita 3:11)
                </p>
              </div>
              <div className="text-center w-full">
                <p className="font-['EB_Garamond',serif] text-[#1d1b18] text-[14px] leading-[22.75px] m-0">
                  Dengan ini (Yadnya), kami berbakti kepada Hyang Widhi
                </p>
                <p className="font-['EB_Garamond',serif] text-[#1d1b18] text-[14px] leading-[22.75px] m-0">
                  dan dengan ini pula Hyang Widhi memelihara dan
                </p>
                <p className="font-['EB_Garamond',serif] text-[#1d1b18] text-[14px] leading-[22.75px] m-0">
                  mengasihi kamu. Dengan saling memelihara satu sama
                </p>
                <p className="font-['EB_Garamond',serif] text-[#1d1b18] text-[14px] leading-[22.75px] m-0">
                  lain, kamu akan mencapai kebaikan yang maha tinggi.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Background ornaments — middle band */}
          <div
            className="absolute top-[752px] left-0 right-0 h-[400px] opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: `url("${imgBackgroundOrnaments}")`, backgroundSize: "512px 512px" }}
          />

          {/* ── SCHEDULE & LOCATION ── */}
          <div ref={scheduleRef} className="bg-[#f5efe4] py-[40px] px-[24px] flex flex-col gap-[24px] border-y border-[rgba(148,118,92,0.1)] relative z-10">

            {/* Date Badge */}
            <FadeIn enabled={isOpen}>
              <div className="flex items-center justify-center w-full">
                <div className="bg-[#faf6ee] rounded-[12px] w-full border border-[rgba(148,118,92,0.15)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col items-center justify-center px-[33px] py-[13px]">
                    <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[14px] leading-[20px] tracking-[1.6px] m-0">
                      Hari / Tanggal
                    </p>
                    <p className="font-['EB_Garamond',serif] text-[#1d1b18] text-[20px] leading-[28px] m-0 mt-[2px]">
                      Rabu, 05 Agustus 2026
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Event 1 — Upacara Utama */}
            <FadeIn enabled={isOpen} delay={100}>
              <div className="bg-[#faf6ee] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] w-full border border-[rgba(148,118,92,0.15)]">
                <div className="flex flex-col gap-[16px] p-[28px]">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[15px] leading-[20px] tracking-[1.6px] m-0">Hari / Tanggal</p>
                      <p className="font-['EB_Garamond',serif] font-normal text-[#1d1b18] text-[18px] leading-[24px] m-0 mt-[2px]">Upacara Utama</p>
                    </div>
                    <div className="rounded-full bg-[#94765c] w-[32px] h-[32px] flex items-center justify-center shrink-0">
                      <svg className="size-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-[8px] items-center w-full">
                    <svg className="size-[16px] text-[#94765c] shrink-0 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                    <p className="font-['EB_Garamond',serif] italic text-[#4f453d] text-[16px] leading-[24px] m-0">09.00 - 12.00 Wita</p>
                  </div>
                  <div className="flex gap-[8px] items-start pb-[8px] w-full">
                    <svg className="size-[18px] text-[#94765c] shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                    <p className="font-['EB_Garamond',serif] italic text-[#1d1b18] text-[16px] leading-[24px] m-0">
                      Pura Dalem Kahyangan Tuban, Kuta,<br />Bali
                    </p>
                  </div>
                  <GoogleMapsButton
                    href="https://maps.app.goo.gl/SVKnf36tjHvg2w5Q9"
                    icon={
                      <svg className="size-[18px] shrink-0 text-[#715b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </FadeIn>

            {/* Between-events divider */}
            <div className="flex items-center justify-center py-[8px] w-full">
              <div className="bg-[rgba(148,118,92,0.3)] h-px w-[48px]" />
              <div className="px-[16px]">
                <div className="opacity-60 size-[32px] relative">
                  <img alt="" className="absolute left-0 size-full top-0" src={imgBalineseLotusIcon} />
                </div>
              </div>
              <div className="bg-[rgba(148,118,92,0.3)] h-px w-[48px]" />
            </div>

            {/* Event 2 — Resepsi & Jamuan */}
            <FadeIn enabled={isOpen} delay={200}>
              <div ref={locationRef} className="bg-[#faf6ee] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[16px] w-full border border-[rgba(148,118,92,0.15)]">
                <div className="flex flex-col gap-[15px] p-[28px]">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[15px] leading-[20px] tracking-[1.6px] m-0">Hari / Tanggal</p>
                      <p className="font-['EB_Garamond',serif] font-normal text-[#1d1b18] text-[18px] leading-[24px] m-0 mt-[2px]">{`Resepsi & Jamuan`}</p>
                    </div>
                    <svg fill="none" height="22" viewBox="0 0 15 20" width="16.5" className="shrink-0">
                      <path d={svgPaths.p23cfd7c0} fill="#94765C" />
                    </svg>
                  </div>
                  <div className="flex gap-[8px] items-center w-full">
                    <svg className="size-[16px] text-[#94765c] shrink-0 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                    <p className="font-['EB_Garamond',serif] italic text-[#4f453d] text-[16px] leading-[24px] m-0">13.00 - Selesai</p>
                  </div>
                  <div className="flex gap-[8px] items-start pb-[8px] w-full">
                    <svg className="size-[18px] text-[#94765c] shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="font-['EB_Garamond',serif] italic text-[#1d1b18] text-[16px] leading-[24px] m-0">
                      Jl. Griya Mandala No. 8, Tuban, Kuta,<br />Bali
                    </p>
                  </div>
                  <GoogleMapsButton
                    href="https://maps.app.goo.gl/SecRVusDABAbifcx6"
                    icon={
                      <svg className="size-[18px] shrink-0 text-[#715b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l6-6M15 9H11M15 9V13" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── CLOSING MESSAGE ── */}
          <FadeIn enabled={isOpen} className="flex flex-col gap-[16px] items-center px-[24px] pt-[40px]">
            <div className="w-full text-center">
              <p className="font-['EB_Garamond',serif] text-[#1d1b18] text-[14px] leading-[22px] m-0">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk memberikan doa restu bagi putri kami.
              </p>
            </div>
            <div className="w-full text-center mt-[8px]">
              <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[16px] leading-[24px] m-0">
                Atas doa restunya, kami ucapkan terima kasih.
              </p>
            </div>
          </FadeIn>

          {/* Background ornaments — bottom band */}
          <div
            className="absolute bottom-[80px] left-0 right-0 h-[400px] opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: `url("${imgBackgroundOrnaments}")`, backgroundSize: "512px 512px" }}
          />

          {/* ── FOOTER ── */}
          <div className="flex flex-col items-center pt-[48px] pb-[32px]">

            {/* Weda quote block */}
            <FadeIn enabled={isOpen} className="flex flex-col gap-[30px] items-start w-full px-[36px] pb-[32px]">
              <LotusDivider />
              <div className="flex flex-col gap-[7px] items-start w-full pt-[8px]">
                <div className="w-full text-center">
                  <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[14px] leading-[22.75px] m-0">
                    Na tasya pratima asti yasya nama mahad yasah
                  </p>
                </div>
                <div className="w-full text-center">
                  <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[14px] leading-[20px] m-0">
                    (Yajur Weda 32:3)
                  </p>
                </div>
                <div className="w-full text-center mt-[4px]">
                  <p className="font-['EB_Garamond',serif] text-[#1d1b18] text-[14px] leading-[22px] m-0">
                    Tuhan tidak berwujud dan tidak dapat dibatasi oleh rupa, namun kemuliaan-Nya meliputi segala sesuatu.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-start justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[15px] leading-[28px] text-center m-0">
                    {`"Semoga pikiran yang baik datang dari segala penjuru"`}
                  </p>
                </div>
                <div className="w-full text-center">
                  <p className="font-['Manrope',sans-serif] font-normal text-[11px] text-[rgba(79,69,61,0.6)] tracking-[1.2px] uppercase leading-[16px] m-0">
                    ANO BHADRAH KRATAVO YANTU VISHVATAH
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Countdown Strip */}
            <FadeIn enabled={isOpen} delay={100} className="w-full bg-[#f5efe4] py-[24px] my-[24px] flex flex-col items-center justify-center border-y border-[rgba(148,118,92,0.1)]">
              <div className="flex gap-[12px] items-center justify-center w-full max-w-[320px]">
                {[
                  { value: days, label: "HARI" },
                  { value: hours, label: "JAM" },
                  { value: minutes, label: "MENIT" },
                  { value: seconds, label: "DETIK" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center flex-1">
                    <div className="bg-[#614d3f] w-[60px] h-[60px] flex items-center justify-center rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
                      <span className="font-['EB_Garamond',serif] text-[26px] font-normal text-white leading-none">
                        {pad(value)}
                      </span>
                    </div>
                    <span className="font-['Manrope',sans-serif] text-[#614d3f] text-[9px] font-bold leading-[14px] tracking-[1px] uppercase mt-[8px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Om Shanti */}
            <FadeIn enabled={isOpen} delay={200}>
              <div className="pt-[16px] px-[24px]">
                <p className="font-['EB_Garamond',serif] italic text-[#94765c] text-[24px] leading-[32px] text-center m-0">
                  Om Shanti Shanti Shanti Om
                </p>
              </div>
            </FadeIn>

            {/* Bottom spacing placeholder */}
            <div className="h-[48px]" />
          </div>
        </div>

        {/* ── BOTTOM NAV ── */}
        {isUnlocked && (
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white/95 backdrop-blur-md drop-shadow-[0px_-4px_16px_rgba(148,118,92,0.08)] flex items-center px-[40px] pt-[12px] pb-[20px] rounded-t-[20px] border-t border-[rgba(148,118,92,0.08)] justify-between z-50">
            {/* Invitation */}
            <button
              onClick={() => scrollTo("invitation")}
              className="flex flex-col items-center gap-[4px] border-0 bg-transparent cursor-pointer p-0 w-[80px]"
            >
              <svg fill="none" height="20" viewBox="0 0 22 22" width="20">
                <path d={svgPaths.p27114680} fill={active === "invitation" ? "#94765C" : "rgba(148,118,92,0.4)"} />
              </svg>
              <span
                className="font-['Manrope',sans-serif] text-[9px] font-bold tracking-[0.5px] uppercase"
                style={{ color: active === "invitation" ? "#94765C" : "rgba(148,118,92,0.5)" }}
              >
                INVITATION
              </span>
            </button>

            {/* Schedule */}
            <button
              onClick={() => scrollTo("schedule")}
              className="flex flex-col items-center gap-[4px] border-0 bg-transparent cursor-pointer p-0 w-[80px]"
            >
              <svg fill="none" height="20" viewBox="0 0 16.9999 19.1153" width="18">
                <path d={svgPaths.p111fd980} fill={active === "schedule" ? "#94765C" : "rgba(148,118,92,0.4)"} />
              </svg>
              <span
                className="font-['Manrope',sans-serif] text-[9px] font-bold tracking-[0.5px] uppercase"
                style={{ color: active === "schedule" ? "#94765C" : "rgba(148,118,92,0.5)" }}
              >
                SCHEDULE
              </span>
            </button>

            {/* Location */}
            <button
              onClick={() => scrollTo("location")}
              className="flex flex-col items-center gap-[4px] border-0 bg-transparent cursor-pointer p-0 w-[80px]"
            >
              <svg fill="none" height="20" viewBox="0 0 19.5 20.5" width="19">
                <path d={svgPaths.p26223080} fill={active === "location" ? "#94765C" : "rgba(148,118,92,0.4)"} />
              </svg>
              <span
                className="font-['Manrope',sans-serif] text-[9px] font-bold tracking-[0.5px] uppercase"
                style={{ color: active === "location" ? "#94765C" : "rgba(148,118,92,0.5)" }}
              >
                LOCATION
              </span>
            </button>
          </div>
        )}

        {/* Floating Music Toggle */}
        {isUnlocked && (
          <button
            onClick={() => {
              if (!ytPlayerRef.current) return;
              if (isMuted) {
                ytPlayerRef.current.unMute();
              } else {
                ytPlayerRef.current.mute();
              }
              setIsMuted(prev => !prev);
            }}
            aria-label={isMuted ? "Unmute music" : "Mute music"}
            className="fixed top-4 right-4 z-[200] w-[42px] h-[42px] rounded-full bg-[#614d3f]/80 backdrop-blur-sm flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] cursor-pointer border-none text-white transition-all duration-200 hover:bg-[#614d3f] hover:scale-110 active:scale-95"
          >
            {isMuted ? (
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <line x1="17" y1="9" x2="23" y2="15" strokeLinecap="round" />
                <line x1="23" y1="9" x2="17" y2="15" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
