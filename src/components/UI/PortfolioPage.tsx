"use client";

import React from "react";

export type Project = {
  id: string;
  title: string;
  client?: string;
  cover: string; // image url
  link?: string; // external link to project
  tags: string[]; // e.g., ["Website", "Responsive", "React", "UI/UX"]
  period?: string; // e.g., "2025/05/12 → 2025/07/01"
};

// ------------------------------------------------------------
// Sample Data (swap with your own)
// ------------------------------------------------------------
const PROJECTS: Project[] = [
  {
    id: "bupyeong",
    title: "[부평시장] 웹 페이지 리뉴얼",
    client: "부평종합시장",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    link: "https://bupyeongmarket.netlify.app/",
    tags: ["Website", "Responsive", "React", "UI/UX"],
    period: "2025/05/12 → 2025/07/01",
  },
  {
    id: "livon",
    title: "[Liv;ON] 웹페이지 개발",
    client: "Liv;ON",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    link: "https://liveon1018.netlify.app/",
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2025/04/30 → 2025/06/27",
  },
  {
    id: "carmore",
    title: "[Carmore] 랜딩페이지",
    client: "Carmore",
    cover:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    link: "https://carmore.netlify.app/",
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2022/03/21 → 2022/04/28",
  },
  {
    id: "toss",
    title: "[Toss] 클론페이지",
    client: "Toss",
    cover:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop",
    link: "https://yujintoss.netlify.app/",
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2025/07/07 → 2025/07/14",
  },
  {
    id: "apple",
    title: "[Apple] 클론페이지",
    client: "Apple",
    cover:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    link: "https://yujinapple.netlify.app/",
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2025/07/07 → 2025/07/15",
  },
  {
    id: "portfolio",
    title: "React Portfolio",
    client: "포트폴리오",
    cover:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
    link: "#",
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2025/07/18 → 2025/07/25",
  },
];

// ------------------------------------------------------------
// Utilities
// ------------------------------------------------------------
const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

const TAG_STYLES: Record<string, string> = {
  Website:
    "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/20 dark:text-fuchsia-300 dark:border-fuchsia-800",
  Responsive:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
  React:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800",
  "UI/UX":
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800",
};

function TagBadge({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        TAG_STYLES[label] ||
          "bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-900/20 dark:text-zinc-300 dark:border-zinc-800"
      )}
    >
      {label}
    </span>
  );
}

// ------------------------------------------------------------
// Card
// ------------------------------------------------------------
function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={
        "group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-zinc-900/60 dark:border-zinc-800"
      }
    >
      {/* Cover */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Title overlay on image (like screenshot) */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-xl bg-black/40 px-4 py-2 text-center text-white backdrop-blur-sm">
            <p className="text-base font-semibold tracking-wide drop-shadow">
              {project.title.split(" ")[0]} {/* subtle visual balance */}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-3 p-5">
        <h3 className="line-clamp-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        {project.client && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.client}</p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <TagBadge key={t} label={t} />
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center text-xs font-medium text-sky-700 underline-offset-4 hover:underline dark:text-sky-300"
          >
            {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        )}

        {/* Period */}
        {project.period && (
          <p className="pt-1 text-[11px] text-zinc-400 dark:text-zinc-500">{project.period}</p>
        )}
      </div>

      {/* Clickable overlay when link exists */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer noopener"
          className="absolute inset-0"
          aria-label={`${project.title} 열기`}
        />
      )}
    </article>
  );
}

// ------------------------------------------------------------
// Page
// ------------------------------------------------------------
export default function PortfolioPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-6">
      {/* Page header */}
      <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span className="grid h-8 w-8 place-items-center rounded-full border bg-white dark:bg-zinc-900 dark:border-zinc-800">🏷️</span>
        <span className="font-medium">Project</span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        {/* Left rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 select-none space-y-1">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Portfolioddd
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">포트폴리오</p>
          </div>
        </aside>

        {/* Grid */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
