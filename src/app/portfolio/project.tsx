
export type Project = {
id: string;
title: string;
client?: string;
cover: string; // 이미지 URL
link?: string; // 실제 배포 링크 (상세에서 버튼으로 제공)
tags: string[];
period?: string;
summary?: string; // 상세 상단 요약
description?: string; // 상세 본문
};

export const PROJECTS: Project[] = [
{
id: "bupyeong",
title: "[부평시장] 웹 페이지 리뉴얼",
client: "부평종합시장",
cover:
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
link: "https://bupyeongmarket.netlify.app/",
tags: ["Website", "Responsive", "React", "UI/UX"],
period: "2025/05/12 → 2025/07/01",
summary: "전통시장 브랜드 리뉴얼. 반응형 그리드와 접근성 강화.",
description:
"메인 히어로, 카테고리 카드, 점포 상세 레이아웃을 컴포넌트화하여 유지보수를 단순화. 이미지 지연로딩과 스켈레톤으로 LCP 개선.",
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
summary: "미니멀 인테리어 톤앤매너 적용. 스크롤 모션 기반 섹션.",
description:
"IntersectionObserver로 섹션 인뷰 애니메이션을 제어. 모바일 우선 타이포 스케일과 그리드 간격을 재설계.",
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
summary: "전환 중심 랜딩. 혜택-신뢰-CTA 3단 퍼널.",
description:
"핵심 가치 제안과 사회적 증거(리뷰/배지) 배치, 상단 고정 CTA로 클릭률 향상.",
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
summary: "토스 스타일 가이드 학습용 클론.",
description:
"토스의 여백 시스템과 색 대비를 Tailwind 토큰으로 재현. 다크모드 대응.",
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
summary: "제품 히어로 집중형 레이아웃.",
description:
"16:9 미디어와 타이포 대비를 극대화. 스크롤 스냅으로 섹션 이동감을 강화.",
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
summary: "현재 포트폴리오 셋업.",
description:
"Next.js App Router + Tailwind. 카드 → 상세 페이지 전환과 태그 시스템 적용.",
},
];


export function getProject(id: string) {
return PROJECTS.find((p) => p.id === id);
}
