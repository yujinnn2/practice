"use client";
import React from "react";
import { HoverEffect, type SkillItem } from "./CardHoverEffect";

export default function CardHoverEffectDemo() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
        Skills
      </h2>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        협업/퍼블리싱 중심으로 실제 사용 스킬을 정리했어요.
      </p>
      <HoverEffect items={skills} />
    </section>
  );
}

const ACCENT = "#24292E";

const skills: SkillItem[] = [
  {
    title: "Adobe Photoshop",
    description: "이미지 편집, 리터칭, 디지털 아트워크 제작",
    iconSrc:
      "https://i.ibb.co/jvbKrJbk/Ps.webp",
    accentHex: ACCENT,
  },
  {
    title: "Xd",
    description: "UI/UX 설계, 프로토타입 제작, 협업 중심 웹/앱 디자인",
    iconSrc: "https://i.ibb.co/NgczJ28z/xd.webp",
    accentHex: ACCENT,
  },
  {
    title: "Figma",
    description: "실시간 협업 디자인, 프로토타입 제작 및 관리",
    iconSrc: "https://i.ibb.co/wNBCK06h/Figma.webp",
    accentHex: ACCENT,
  },
  {
    title: "Html5",
    description: "웹 표준 준수 콘텐츠 작성, 시맨틱 구조의 웹 개발",
    iconSrc: "/skills/html5.svg",
    accentHex: ACCENT,
  },
  {
    title: "CSS3",
    description: "반응형 레이아웃 구현, 크로스 브라우징 최적화",
    iconSrc: "https://i.ibb.co/VcLTPB94/css.webp",
    accentHex: ACCENT,
  },
  {
    title: "JavaScript",
    description: "동적 기능 구현, 사용자 상호작용 강화",
    iconSrc: "/skills/javascript.svg",
    accentHex: ACCENT,
  },
  {
    title: "jQuery",
    description: "DOM 조작·이벤트 단순화, 애니메이션 및 인터랙션",
    iconSrc: "/skills/jquery.svg",
    accentHex: ACCENT,
  },
  {
    title: "SCSS",
    description: "변수·믹스인 활용, 효율적 스타일 관리",
    iconSrc: "/skills/sass.svg",
    accentHex: ACCENT,
  },
  {
    title: "Tailwind",
    description: "유틸리티 기반 디자인, 빠른 UI 구축 및 확장",
    iconSrc: "/skills/tailwindcss.svg",
    accentHex: ACCENT,
  },
  {
    title: "antd",
    description: "기업용 UI 컴포넌트, 효율적 커스터마이징",
    iconSrc: "/skills/ant-design.svg",
    accentHex: ACCENT,
  },

  {
    title: "styled-component",
    description: "컴포넌트 단위 스타일링, 동적 스타일 적용 최적화",
    iconSrc: "/skills/styled-components.svg",
    accentHex: ACCENT,
  },
  {
    title: "emotion",
    description: "강력한 CSS-in-JS, 유연한 테마 관리 지원",
    iconSrc: "/skills/emotion.svg",
    accentHex: ACCENT,
  },
  {
    title: "Gsap",
    description: "정교한 애니메이션 제어, 생동감 있는 UX 제공",
    iconSrc: "/skills/gsap.svg",
    accentHex: ACCENT,
  },
  {
    title: "React",
    description: "가상 DOM 기반 렌더링, 대규모 컴포넌트 구조",
    iconSrc: "/skills/react.svg",
    accentHex: ACCENT,
  },
  {
    title: "Next.js",
    description: "서버사이드 렌더링, SEO 최적화 프레임워크",
    iconSrc: "/skills/nextjs.svg",
    accentHex: ACCENT,
  },

  {
    title: "TypeScript",
    description: "정적 타입 기반 안정성, 대규모 프로젝트 최적화",
    iconSrc: "/skills/typescript.svg",
    accentHex: ACCENT,
  },
  {
    title: "Wordpress",
    description: "CMS 기반 사이트 구축, 테마·플러그인 관리",
    iconSrc: "/skills/wordpress.svg",
    accentHex: ACCENT,
  },
  {
    title: "Bootstrap5",
    description: "반응형 그리드 시스템, 빠른 프로토타입 가능",
    iconSrc: "/skills/bootstrap.svg",
    accentHex: ACCENT,
  },
  {
    title: "Notion",
    description: "프로젝트 관리, 문서화, 팀 협업 워크스페이스",
    iconSrc: "/skills/notion.svg",
    accentHex: ACCENT,
  },
  {
    title: "github",
    description: "버전 관리와 코드 리뷰, 효율적 협업 프로세스",
    iconSrc: "/skills/github.svg",
    accentHex: ACCENT,
  },
];
