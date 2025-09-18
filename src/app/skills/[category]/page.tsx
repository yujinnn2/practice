// app/skills/[category]/page.tsx
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CATEGORY_LABEL, SKILLS, type SkillCategory } from "../data";

type Params = { category: string };

function isCategory(v: string): v is SkillCategory {
  return ["design", "frontend", "library", "deployment"].includes(v);
}

export default function SkillsCategoryPage({ params }: { params: Params }) {
  const active: SkillCategory = isCategory(params.category) ? (params.category as SkillCategory) : "design";

  // 활성 스킬을 앞으로 정렬해 더 눈에 띄게
  const skills = [...SKILLS].sort((a, b) => {
    const aOn = a.tags.includes(active) ? 1 : 0;
    const bOn = b.tags.includes(active) ? 1 : 0;
    return bOn - aOn;
  });

  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:py-20">
      {/* 배경 글로우 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-[240px] bg-gradient-to-b from-zinc-200/60 to-transparent blur-3xl
                   dark:from-zinc-800/40"
      />

      {/* 헤더 + 탭 */}
      <header className="mb-8 sm:mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Skills <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400">기술 스택</span>
        </h1>
        <nav className="mt-5 flex flex-wrap gap-2">
          {(["design", "frontend", "library", "deployment"] as SkillCategory[]).map((cat) => {
            const on = cat === active;
            return (
              <Link
                key={cat}
                href={`/skills/${cat}`}
                className={`rounded-full border px-3 py-1.5 text-sm transition
                ${on
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  }`}
                aria-current={on ? "page" : undefined}
              >
                {CATEGORY_LABEL[cat]}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* 아이콘 그리드 */}
      <section
        className="relative rounded-3xl border bg-white/60 p-6 shadow-sm backdrop-blur-sm
                   dark:border-zinc-800 dark:bg-zinc-900/50"
      >
        {/* 배경 블러 점 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl
                     [background:radial-gradient(600px_160px_at_30%_30%,rgba(0,0,0,0.04),transparent),radial-gradient(600px_160px_at_70%_70%,rgba(0,0,0,0.04),transparent)]
                     dark:[background:radial-gradient(600px_160px_at_30%_30%,rgba(255,255,255,0.05),transparent),radial-gradient(600px_160px_at_70%_70%,rgba(255,255,255,0.05),transparent)]"
        />

        <ul className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8">
          {skills.map((s) => {
            const on = s.tags.includes(active);
            return (
              <li key={s.id} className="group relative">
                <div
                  className={`grid aspect-square place-items-center rounded-xl border bg-white shadow-sm
                              transition-all duration-300
                              dark:border-zinc-800 dark:bg-zinc-900
                              ${on ? "opacity-100 blur-0"
                                    : "opacity-40 blur-[1.5px] grayscale contrast-75"
                              }`}
                  title={s.name}
                  aria-label={s.name}
                >
                  {s.icon ? (
                    <img
                      src={s.icon}
                      alt={s.name}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                  ) : (
                    <span className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-md bg-zinc-100 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">
                      {s.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
