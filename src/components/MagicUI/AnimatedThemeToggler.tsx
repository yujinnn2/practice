"use client";

import { Moon, SunDim } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type Props = { className?: string };

// 시스템/저장값을 반영해 초기 테마를 판단
function getInitialIsDark(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}

export const AnimatedThemeToggler = ({ className }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // 첫 마운트 시 html.classList와 상태를 동기화
  useEffect(() => {
    const dark = getInitialIsDark();
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const toggle = () => {
      flushSync(() => {
        const dark = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", dark);
        setIsDarkMode(dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
      });
    };

    // View Transitions API 지원 여부 체크
    const startViewTransition: typeof document.startViewTransition | undefined =
      document.startViewTransition;

    if (!startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // 폴백: 애니메이션 없이 토글
      toggle();
      return;
    }

    const vt = document.startViewTransition(() => toggle());
    await vt.ready;

    // 버튼 중심 기준 원형 와이프
    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      aria-label={isDarkMode ? "라이트 모드로 변경" : "다크 모드로 변경"}
      aria-pressed={isDarkMode}
      className={cn(
        // ✅ 우측 하단 고정(FAB 스타일)
        "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[1000]",
        // 버튼 스타일
        "size-11 md:size-12 rounded-full border shadow-lg",
        "bg-white/70 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
        "border-black/10 dark:border-white/10",
        "flex items-center justify-center",
        "transition-transform duration-200 hover:scale-105 active:scale-95",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30 focus-visible:ring-offset-transparent",
        className
      )}
    >
      {isDarkMode ? (
        <SunDim className="w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <Moon className="w-5 h-5 md:w-6 md:h-6" />
      )}
    </button>
  );
};
