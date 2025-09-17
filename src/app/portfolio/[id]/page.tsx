import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "../project";


export default function Detail({ params }: { params: { id: string } }) {
const project = getProject(params.id);
if (!project) return notFound();

return (
<main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
<nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
<Link href="/portfolio" className="underline-offset-4 hover:underline">Projects</Link>
<span className="mx-2">/</span>
<span className="text-zinc-700 dark:text-zinc-200">{project.title}</span>
</nav>


<div className="overflow-hidden rounded-2xl border shadow-sm dark:border-zinc-800">
<div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-800">
<img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
</div>
</div>


<header className="mt-6 space-y-2">
<h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h1>
<div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
{project.client && <span className="mr-2">{project.client}</span>}
{project.period && <span>· {project.period}</span>}
</div>
<div className="flex flex-wrap gap-2 pt-2">
{project.tags.map((t) => (
<span key={t} className="rounded-full border px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300 dark:border-zinc-700">{t}</span>
))}
</div>
</header>

<div className="mt-4 flex gap-3">
{project.link && (
<a href={project.link} target="_blank" rel="noreferrer noopener" className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800">
Live 사이트 보기 <span className="ml-1">↗</span>
</a>
)}
<Link href="/portfolio" className="inline-flex items-center rounded-lg border px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800">목록으로</Link>
</div>


<section className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
{project.summary && <p className="lead">{project.summary}</p>}
{project.description && <p>{project.description}</p>}
</section>
</main>
);
}