// app/skills/data.ts
export type SkillCategory = "design" | "frontend" | "library" | "deployment";

export type Skill = {
  id: string;
  name: string;
  icon?: string;            // public/icons/*.svg, png, webp 등
  tags: SkillCategory[];    // 여러 카테고리에 속할 수 있음
};

export const CATEGORY_LABEL: Record<SkillCategory, string> = {
  design: "Design",
  frontend: "Frontend",
  library: "Library",
  deployment: "Deployment",
};

// 아이콘은 /public/icons/ 아래에 추가해줘
export const SKILLS: Skill[] = [
  // Design
  { id: "photoshop", name: "Photoshop", icon: "/icons/photoshop.svg", tags: ["design"] },
  { id: "xd",        name: "Adobe XD",  icon: "/icons/xd.svg",        tags: ["design"] },
  { id: "figma",     name: "Figma",     icon: "/icons/figma.svg",     tags: ["design"] },

  // Frontend
  { id: "html5", name: "HTML5", icon: "/icons/html5.svg", tags: ["frontend"] },
  { id: "css3",  name: "CSS3",  icon: "/icons/css3.svg",  tags: ["frontend"] },
  { id: "js",    name: "JavaScript", icon: "/icons/js.svg", tags: ["frontend"] },
  { id: "ts",    name: "TypeScript", icon: "/icons/typescript.svg", tags: ["frontend", "library"] },
  { id: "react", name: "React", icon: "/icons/react.svg", tags: ["frontend", "library"] },
  { id: "next",  name: "Next.js", icon: "/icons/nextjs.svg", tags: ["frontend"] },
  { id: "scss",  name: "SCSS", icon: "/icons/scss.svg", tags: ["frontend", "library"] },
  { id: "tailwind", name: "Tailwind", icon: "/icons/tailwind.svg", tags: ["frontend", "library"] },
  { id: "jquery", name: "jQuery", icon: "/icons/jquery.svg", tags: ["frontend", "library"] },
  { id: "bootstrap", name: "Bootstrap", icon: "/icons/bootstrap.svg", tags: ["frontend", "library"] },

  // Library / UI
  { id: "styled", name: "styled-components", icon: "/icons/styled-components.svg", tags: ["library", "frontend"] },
  { id: "emotion", name: "emotion", icon: "/icons/emotion.svg", tags: ["library", "frontend"] },
  { id: "antd", name: "Ant Design", icon: "/icons/antd.svg", tags: ["library", "frontend"] },
  { id: "gsap", name: "GSAP", icon: "/icons/gsap.svg", tags: ["library", "frontend"] },

  // Deployment / Workflow
  { id: "github", name: "GitHub", icon: "/icons/github.svg", tags: ["deployment"] },
  { id: "vercel", name: "Vercel", icon: "/icons/vercel.svg", tags: ["deployment"] },
  { id: "netlify", name: "Netlify", icon: "/icons/netlify.svg", tags: ["deployment"] },
  { id: "wordpress", name: "WordPress", icon: "/icons/wordpress.svg", tags: ["deployment"] },
  { id: "notion", name: "Notion", icon: "/icons/notion.svg", tags: ["deployment"] },
];
