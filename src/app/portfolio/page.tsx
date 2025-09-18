import Link from "next/link";
import type { PortfolioProject } from "./project";
import { PROJECTS } from "./project";

const TAG: Record<string, string> = {
Website: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/20 dark:text-fuchsia-300 dark:border-fuchsia-800",
Responsive:"bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
React: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800",
"UI/UX": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800",
};


function Badge({ label }: { label: string }) {
const cls =
TAG[label] ??
"bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-900/20 dark:text-zinc-300 dark:border-zinc-800";
return (
<span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${cls}`}>
{label}
</span>
);
}

function Card({ project }: { project: PortfolioProject }) {
return (
<article className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-zinc-900/60 dark:border-zinc-800">
<div className="relative aspect-[16/9] bg-zinc-100 dark:bg-zinc-800">
{typeof project.cover === "string" ? (
  <img
    src={project.cover}
    alt={project.title}
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    loading="lazy"
  />
) : (
  project.cover // JSX(video) 그대로 출력
)}
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/25 to-transparent [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
</div>
</div>
<div className="space-y-3 p-5">
<h3 className="line-clamp-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
{project.client && <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.client}</p>}
<div className="flex flex-wrap gap-2 pt-1">{project.tags.map((t) => <Badge key={t} label={t} />)}</div>
{project.period && <p className="pt-1 text-[11px] text-zinc-400 dark:text-zinc-500">{project.period}</p>}
<div className="flex items-center gap-1 text-sm font-medium zinc-800 dark:text-zinc-200">
<span>View more</span>
<span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
</div>
</div>
<Link href={`/portfolio/${project.id}`} className="absolute inset-0" aria-label={`${project.title} 상세로 이동`} />
</article>
);
}

export default function Page() {
return (
<main className="mx-auto max-w-6xl px-6">
<div className="mb-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
{/* <span className="grid h-8 w-8 place-items-center rounded-full border bg-white dark:bg-zinc-900 dark:border-zinc-800">🏷️</span> */}
{/* <span className="font-medium">Project</span> */}
</div>


<div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
<aside className="hidden lg:block">
<div className="sticky top-8 select-none space-y-1">
<h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Portfolio</h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400">포트폴리오</p>
</div>
</aside>


<section>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
{PROJECTS.map((p) => <Card key={p.id} project={p} />)}
</div>
</section>
</div>
</main>
);
}