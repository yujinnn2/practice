"use client";
import React from "react";

export type SkillItem = {
  title: string;
  description: string;
  iconSrc: string; // /public/skills/*.svg 같은 경로
  link?: string; // 선택: 클릭 시 이동할 URL
  accentHex?: string; // 선택: 아이콘 배경 라이트 톤 (예: "#0ACF83")
};

type HoverEffectProps = {
  items: SkillItem[];
  className?: string;
};

export const HoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className,
}) => {
  return (
    <div
      className={[
        "grid gap-5",
        "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className ?? "",
      ].join(" ")}
    >
      {items.map((item, idx) => {
        const CardTag = item.link ? "a" : "div";
        return (
          <CardTag
            key={idx}
            href={item.link}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noreferrer" : undefined}
            className={[
              "group relative block rounded-2xl border",
              "border-neutral-200 bg-white shadow-sm",
              "dark:border-neutral-800 dark:bg-neutral-900",
              "p-4 transition-all",
              "hover:-translate-y-0.5 hover:shadow-md",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20",
            ].join(" ")}
          >
            <div className="flex items-start gap
            
            -3">
              {/* 아이콘 */}
              <div
                className="grid h-12 w-12 place-items-center-top rounded-xl ring-1"
                style={{
                  background: "none",
                  borderColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <img
                  src={item.iconSrc}
                  alt={`${item.title} logo`}
                  className="h-6 w-6 object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* 텍스트 */}
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold leading-6 text-neutral-900 dark:text-neutral-50 ml-2">
                  {item.title}
                </h3>
                <p className="mt-1 text-[12px] leading-5 text-neutral-500 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>

            {/* 호버 얇은 하이라이트 보더 */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition-all group-hover:ring-1"
              style={{
                boxShadow: item.accentHex
                  ? `0 0 0 1px ${hexToRgba(item.accentHex, 0.35)} inset`
                  : undefined,
              }}
            />
          </CardTag>
        );
      })}
    </div>
  );
};

// #RRGGBB -> rgba 변환 (알파 포함)
function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
        .split("")
        .map((c) => c + c)
        .join("")
      : h,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default HoverEffect;
