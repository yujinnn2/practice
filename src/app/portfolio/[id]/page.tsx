import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "../project";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9가-힣 -]/g, "")
    .trim()
    .replace(/ +/g, "-");
}

export default function Detail({ params }: { params: { id: string } }) {
  const project = getProject(params.id);
  if (!project) return notFound();

  const sections = project.sections ?? [
    { title: "Overview", paragraphs: [project.summary || "", project.description || ""].filter(Boolean) },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/portfolio" className="underline-offset-4 hover:underline">Projects</Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-700 dark:text-zinc-200">{project.title}</span>
      </nav>

      {/* Head */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100">{project.title}</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">{project.summary}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300 dark:border-zinc-700">{t}</span>
          ))}
        </div>
        <div className="mt-3 flex gap-3">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer noopener" className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800">
              Live 사이트 보기 <span className="ml-1">↗</span>
            </a>
          )}
          <Link href="/portfolio" className="inline-flex items-center rounded-lg border px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800">목록으로</Link>
        </div>
      </header>

      {/* Layout: README(좌) + TOC(우) */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">
        {/* README 본문 */}
        <article className="max-w-none">
          {sections.map((sec) => {
            const id = slugify(sec.title);
            return (
              <section key={id} className="mt-10">
                <h2 id={id} className="group scroll-mt-24 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  <a href={`#${id}`} className="inline-flex items-center">
                    {sec.title}
                    <span className="ml-2 text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100 dark:text-zinc-500">#</span>
                  </a>
                </h2>
                {sec.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">{p}</p>
                ))}
                {sec.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                    {sec.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {sec.code?.map((c, i) => (
                  <pre key={i} className="mt-4 overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-100">
                    <code>{c.content}</code>
                  </pre>
                ))}
                {sec.images?.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt || ''} className="mt-4 rounded-xl border dark:border-zinc-800" />
                ))}
              </section>
            );
          })}
        </article>

        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border p-4 text-sm dark:border-zinc-800">
            <p className="mb-3 font-medium text-zinc-700 dark:text-zinc-200">On this page</p>
            <ul className="space-y-2">
              {sections.map((sec) => {
                const id = slugify(sec.title);
                return (
                  <li key={id}>
                    <a href={`#${id}`} className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">{sec.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
