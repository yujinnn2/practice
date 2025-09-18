"use client";
import React from "react";
import { HoverEffect, type SkillItem } from "./CardHoverEffect";

export default function CardHoverEffectDemo() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="mb-1 text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
        Skills
      </h2>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        기술 스택
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
      "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F4355b518-649a-406e-8c78-c3e06b40ebaa%2FPs.png/size/w=250?exp=1758210382&sig=1CLOrGtDkjbm6SbtrIEuUaUe8U7WFuhlQDMUG361fkM&id=223b276b-2973-8181-8661-fa3b40b439ec&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
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
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F2eefc9a0-93d0-4f64-af7b-fa0ff16499a6%2Fhtml.png/size/w=250?exp=1758210458&sig=4koc2qKZ2W-WcFehUDkXH5dJIJI49pv_6JnQgtXZuDA&id=223b276b-2973-8087-ba06-da57fbb6be05&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
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
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F8931ed19-dd51-4fbf-8921-41fbd25d90b3%2Fjs.png/size/w=250?exp=1758210568&sig=WyF2PyADhcIbAWlssQEPVpzjyW3reH9UezOncZSuT_k&id=223b276b-2973-805b-8844-ee01125e430d&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "jQuery",
    description: "DOM 조작·이벤트 단순화, 애니메이션 및 인터랙션",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F98a30106-7c51-4dcd-bbe6-096269832aa4%2Fjq.png/size/w=250?exp=1758210866&sig=8ezjb1mi2ILRegZZ402_MfRL4vk-phwXcsBbTSH98jY&id=223b276b-2973-8075-a55e-e2c27e63bfab&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "SCSS",
    description: "변수·믹스인 활용, 효율적 스타일 관리",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F9a93eb9a-3f65-4bfd-8429-5382b4c11145%2Fscss.png/size/w=250?exp=1758210951&sig=VxXq1-IJlwa2zXAXupb8TzyQZFeU94bCEAhHNfm2YmU&id=223b276b-2973-80ec-9143-c2d21876c019&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "Tailwind",
    description: "유틸리티 기반 디자인, 빠른 UI 구축 및 확장",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2Fc163c358-6f38-4816-9f4f-687536361796%2Fimage_37.png/size/w=250?exp=1758210966&sig=9ODPBdRJ-qlAhMi3DUWggSnf_qBoZivDb3G5AT9YXfA&id=223b276b-2973-808d-81e4-d49d6e5f4902&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "antd",
    description: "기업용 UI 컴포넌트, 효율적 커스터마이징",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F41df372c-aba2-4101-aa28-45ec9fbe3bd1%2Fimage_3.png/size/w=250?exp=1758215702&sig=cCj1b082yagbxAdUMxBj2dvpBtE1ZDb2sPjD-QcZQ0A&id=26fb276b-2973-8014-b695-dd89c600e6ce&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },

  {
    title: "styled-component",
    description: "컴포넌트 단위 스타일링, 동적 스타일 적용 최적화",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F835f8336-5946-4abc-a13c-01994da23ab3%2Fstyled.png/size/w=250?exp=1758210982&sig=Gj_npEAhZk1mlRaxvWXVwuKlbP16c6HORJb8fYun0tM&id=26fb276b-2973-80c9-8f0b-ee9d19d00470&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "emotion",
    description: "강력한 CSS-in-JS, 유연한 테마 관리 지원",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F9fb96399-77be-4953-8940-b36a1fea9028%2Femptio.png/size/w=250?exp=1758211004&sig=W5mViQp7rYgPBmNTsB3usT7AzlhxW7IOZJefuulj5GM&id=26fb276b-2973-8094-b5f8-cbcd4d4d2055&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "Gsap",
    description: "정교한 애니메이션 제어, 생동감 있는 UX 제공",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F7bfffe10-c2ce-4a63-a977-904ffe4676c9%2Fgsap.png/size/w=250?exp=1758211023&sig=VtQoVaXevVP6gQtm18JxLHJspOh9NLARCA73-mDovbk&id=223b276b-2973-80b8-a51f-cd14b13cb70f&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "React",
    description: "가상 DOM 기반 렌더링, 대규모 컴포넌트 구조",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2Fb3af57d1-32cf-4022-b73f-d5567f0a479b%2Freact.png/size/w=250?exp=1758211039&sig=Q8bp_CpAVc4YofJAHb86yHylyDyDzAXNskStqxrBq20&id=223b276b-2973-8081-8e5c-d8daefed4ef1&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "Next.js",
    description: "서버사이드 렌더링, SEO 최적화 프레임워크",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F6ef262fc-733e-4995-a610-cbbdfcd83e29%2F%EB%84%A5%EC%8A%A4%ED%8A%B8.png/size/w=250?exp=1758211128&sig=MLCAn0OFySOy8J9XV-hkF-NQzabNS86jpgsRTdGppCk&id=26fb276b-2973-8094-8674-fd8cb24709ea&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },

  {
    title: "TypeScript",
    description: "정적 타입 기반 안정성, 대규모 프로젝트 최적화",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F4be49000-b332-444e-9a31-abc213ed81ab%2Fts.png/size/w=250?exp=1758211263&sig=K5C4c4xfh0UZze3Xk5RkjLSz4irU5tH2nU_Sao6z2SU&id=26fb276b-2973-8078-9520-df01365a8c58&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "Wordpress",
    description: "CMS 기반 사이트 구축, 테마·플러그인 관리",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2Fa5cb3dfb-a9c9-4757-aaa8-3e042c9874dd%2Fwordpress.png/size/w=250?exp=1758211421&sig=dyc8herBexpN2zbNKF4OjOkZzy7KDeZwDZQA9gGig7o&id=223b276b-2973-80a7-80fe-ff34e02dbbd5&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "Bootstrap5",
    description: "반응형 그리드 시스템, 빠른 프로토타입 가능",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F2af7547f-3c2e-461e-bea9-ac9558fd91ae%2Fboots.png/size/w=250?exp=1758211435&sig=rX7ie9uARWXkrRczCK4G_ooGsPdwDJ1som5e2676Ezk&id=223b276b-2973-806a-80d5-d5b5b279b5d9&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "Notion",
    description: "프로젝트 관리, 문서화, 팀 협업 워크스페이스",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F12780f04-ca46-42f6-84cc-c4c5ddf41fca%2FNotion.png/size/w=250?exp=1758211448&sig=tVJVsAQFOeKUSQhoCy8yMR-G7YP-XpuYHp5nRXJWhBA&id=223b276b-2973-81b0-9b63-e1a1c1d2468a&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d",
    accentHex: ACCENT,
  },
  {
    title: "github",
    description: "버전 관리와 코드 리뷰, 효율적 협업 프로세스",
    iconSrc: "https://img.notionusercontent.com/s3/prod-files-secure%2F49377370-f92d-41b1-9d79-0072498ff709%2F099c018c-854a-4bce-b21b-190a7018eb16%2Fgit.png/size/w=250?exp=1758215296&sig=bGRCPge5-xOm1fOKxKunY4jeuN_wLm8xrDM7cxWQEZs&id=223b276b-2973-80b7-9ede-ce7b2726f321&table=block&userId=1a4d872b-594c-81e0-b201-00026525d29d  ",
    accentHex: ACCENT,
  },
];
