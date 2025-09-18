// components/FooterContacts.tsx
"use client";

import { Link as LinkIcon, Github, Mail, Phone } from "lucide-react";

type Props = {
  homepage?: string;   // 예: "https://noj.dev"
  github?: string;     // 예: "https://github.com/yujinnn2"
  email?: string;      // 예: "mailto:yujinee11@naver.com"
  phone?: string;      // 예: "tel:+821056626191"
  className?: string;
};

export default function FooterContacts({
  homepage,
  github,
  email,
  phone,
  className = "",
}: Props) {
  const items = [
    {
      href: homepage,
      label: "Homepage",
      icon: <LinkIcon className="h-5 w-5" />,
      classes:
        "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700",
    },
    {
      href: github,
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
      classes:
        "bg-zinc-900 text-white dark:bg-zinc-900 dark:text-white border-zinc-700",
    },
    {
      href: email,
      label: "Email",
      icon: <Mail className="h-5 w-5" />,
      classes:
        "bg-sky-600 text-white dark:bg-sky-600 dark:text-white border-sky-700/40",
    },
    {
      href: phone,
      label: "Phone",
      icon: <Phone className="h-5 w-5" />,
      classes:
        "bg-emerald-600 text-white dark:bg-emerald-600 dark:text-white border-emerald-700/40",
    },
  ];

  return (
    <footer className={className}>
      {/* HR (상단 구분선) */}
      <hr className="mx-6 border-zinc-200 dark:border-zinc-800" />

      {/* 아이콘 탭 */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-4">
          {items.map((it) => {
            const disabled = !it.href;
            const base =
              "group grid h-10 w-10 place-items-center rounded-full border transition " +
              "hover:scale-[1.03] active:scale-[0.98] focus:outline-none " +
              "focus-visible:ring-2 focus-visible:ring-offset-2 " +
              "ring-zinc-400/40 dark:ring-zinc-600/40 ring-offset-white dark:ring-offset-zinc-900";

            return disabled ? (
              <span
                key={it.label}
                aria-disabled="true"
                title={`${it.label} (미설정)`}
                className={`${base} ${it.classes} opacity-40 pointer-events-none`}
              >
                {it.icon}
                <span className="sr-only">{it.label} (disabled)</span>
              </span>
            ) : (
              <a
                key={it.label}
                href={it.href}
                target={it.href?.startsWith("http") ? "_blank" : undefined}
                rel={it.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={it.label}
                title={it.label}
                className={`${base} ${it.classes}`}
              >
                {it.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
