export type DocSection = {
  title: string;            // H2 제목
  paragraphs?: string[];    // 문단들
  bullets?: string[];       // 불릿 리스트
  code?: { lang?: string; content: string }[]; // 코드 블록들
  images?: { src: string; alt?: string }[];    // 이미지들
};

export interface PortfolioProject {
  id: string;
  title: string;
  client?: string;
  cover: string | React.ReactNode;     // 이미지 URL
  link?: string;     // 실제 배포 링크 (상세에서 버튼으로 제공)
  tags: string[];
  period?: string;
  summary?: string;      // 상세 상단 요약
  description?: string;  // 섹션이 없을 때 대체
  sections?: DocSection[]; // ✅ README 스타일 문서 (설치 없이 JSX 렌더)
}

export const PROJECTS: PortfolioProject[] = [
  //부평종합시장
  {
  id: "Bupyeong",
  title: "[부평시장] 웹 페이지 리뉴얼",
  client: "부평종합시장",
  cover: (
            <video
            src="https://bupyeongmarket.netlify.app/assets/videos/%EB%B6%80%ED%8F%89%EB%A1%9C%EA%B3%A0%EC%98%81%EC%83%81.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            />
            ),
  link: "http://www.bptm.co.kr/",
  tags: ["Responsive", "React", "UI/UX"],
  period: "2025/05/12 → 2025/07/01",
  summary:
    "부평종합시장 공식 사이트 구조(시장소개·오시는길·편의시설·시장점포·시장지도·행사이벤트·문화교실·주변관광지·공지/FAQ)를 반영해 정보 탐색 동선을 단순화하고 접근성을 강화한 리뉴얼.",
  sections: [
    {
      title: "Goals",
      bullets: [
        "시장 인지도 제고: 전경/상징 요소 중심의 시각 정체성 정리",
        "탐색성 향상: 카테고리→점포→상세의 예측 가능한 흐름",
        "핵심 정보 단축: 길찾기·주차·영업정보·전화에 빠르게 도달",
        "접근성(A11y) 준수: 명도 대비·키보드 포커스·대체텍스트 정비",
      ],
    },
    {
      title: "Information Architecture",
      bullets: [
        "메인(히어로·공지·이벤트)",
        "시장소개, BI소개",
        "오시는길, 편의시설",
        "시장점포, 시장지도",
        "행사 이벤트, 문화교실",
        "주변관광지",
        "공지사항, FAQ",
      ],
      paragraphs: [
        "상단 GNB와 ‘빠른바로가기’로 자주 쓰는 경로(오시는길/시장지도/행사)를 1클릭 진입으로 구성.",
      ],
    },
    {
      title: "Key Features",
      bullets: [
        "점포 목록/상세 표준화(영업시간·전화·위치·대표품목·해시태그)",
        "시장지도 섹션으로 구역·동선 파악 용이",
        "공지/이벤트 모듈: 진행/종료 상태 관리 및 보관",
        "편의시설 안내(주차·화장실·고객지원 등) 노출",
        "모바일 우선 타이포/간격 스케일, LCP 개선을 위한 이미지 지연 로딩",
      ],
    },
    {
      title: "Visit Info",
      bullets: [
        "주소: 인천광역시 부평구 부흥로316번길 38-3 (부평동)",
        "문의: 032-516-0655",
        "영업시간/휴무: 점포별 상이(상세 페이지에 점포별 노출)",
        "공식 홈페이지: bptm.co.kr",
      ],
      paragraphs: [
        "무장애 접근(주출입 접근로·출입구에 턱 없음) 정보를 접근성 섹션과 연동.",
      ],
    },
    {
      title: "Accessibility",
      bullets: [
        "콘텐츠 대비(본문 4.5:1 이상) 및 포커스 링 일관화",
        "키보드 내비게이션(스킵 링크, 포커스 순서) 준수",
        "이미지 대체텍스트·지리정보 링크에 의미있는 라벨 제공",
        "‘오시는길’ 주요 버튼은 ARIA 라벨로 이동 목적 명확화",
      ],
    },
    {
      title: "Code Snippet",
      code: [
        {
          lang: "tsx",
          content: `type Shop = { id:string; name:string; category:string; img?:string; phone?:string; hours?:string; mapUrl?:string };
function ShopCard({ shop }: { shop: Shop }) {
  return (
    <article className="rounded-xl border overflow-hidden bg-white dark:bg-zinc-900">
      {shop.img && <img src={shop.img} alt={shop.name} className="h-40 w-full object-cover" />}
      <div className="p-4">
        <h3 className="font-semibold">{shop.name}</h3>
        <p className="mt-1 text-sm text-zinc-500">{shop.category}</p>
        <ul className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
          {shop.hours && <li>영업시간: {shop.hours}</li>}
          {shop.phone && <li>전화: {shop.phone}</li>}
        </ul>
        {shop.mapUrl && (
          <a href={shop.mapUrl} target="_blank" rel="noreferrer"
             className="mt-3 inline-flex text-sm text-sky-700 dark:text-sky-300 underline-offset-4 hover:underline">
            지도 길찾기 ↗
          </a>
        )}
      </div>
    </article>
  );
}`,
        },
      ],
    },
    {
      title: "Results (수치 직접 교체 권장)",
      bullets: [
        "모바일 LCP 안정화(지연 로딩·임계 CSS 적용)",
        "길찾기/시장지도 CTA 클릭률 상승",
        "공지·이벤트 조회 전환율 개선",
      ],
    },
    {
      title: "Next Steps",
      bullets: [
        "상인 대시보드(점포 정보/공지) 연동",
        "문화교실 일정 관리 및 예약(옵션)",
        "멀티랭귀지(ko/en) 및 관광 연계 콘텐츠",
      ],
    },
  ],
},
  //리브온
  {
    id: "livon",
    title: "[Liv;ON] 웹페이지 개발",
    client: "Liv;ON",
    cover: (
            <video
            src="/videos/liv.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            />
            ),
    link: "https://liveon1018.netlify.app/",
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2025/04/30 → 2025/06/27",
    summary:
    "‘The Moment Your Space Awaken’ 슬로건을 바탕으로 Brand/Product/Gallery/News/Media/Virtual 정보 구조를 재정리하고, 공간(침실/거실/주방/욕실 등) 단위의 탐색 경험과 모던·우드·클래식·네이처 스타일 큐레이션을 제공.",
  sections: [
    {
      title: "Goals",
      bullets: [
        "브랜드 스토리텔링 강화(슬로건/키비주얼/톤앤매너)",
        "공간 단위 탐색(다이닝·욕실·거실·침실·드레스룸·발코니·서재)로 제품 접점 확대",
        "뉴스/미디어/버추얼 섹션으로 컨텐츠 허브화",
        "모바일 우선(Layout/타이포/간격) + 접근성 및 성능 최적화",
      ],
    },
    {
      title: "Information Architecture",
      bullets: [
        "1차 내비게이션: Brand · Product · Gallery · News · Media · Virtual",
        "홈 히어로(슬로건/CTA) → 공간 카테고리(섹션 카드) → 상세",
        "하단 푸터: 고객센터, 운영시간, 주소/연락처, 약관·개인정보",
      ],
      paragraphs: [
        "자주 찾는 정보(공간·스타일·소식)를 상단/중단 주요 섹션에 배치하고, 푸터에는 운영 정보와 정책 링크를 고정.",
      ],
    },
    {
      title: "Key Features",
      bullets: [
        "히어로 카피: “The Moment Your Space Awaken. Turn on your life”",
        "공간 섹션: Diningroom / Bathroom / Livingroom / Bedroom / Dressroom / Balcony / Study",
        "스타일 큐레이션: Modern / Wood / Classic / Nature",
        "What's New: 카드형 소식 리스트(제목·요약·날짜)",
        "푸터 정보: 고객센터/운영시간/주소/대표자/사업자/연락처",
      ],
    },
    {
      title: "Brand & Visual",
      bullets: [
        "여백 중심 타이포그래피와 대문자 헤드라인의 대비 강화",
        "원형 회전 CTA 등 모션 포인트로 시선 유도",
        "카드/그리드 기반의 규칙적인 섹션 단락화",
      ],
    },
    {
      title: "Accessibility",
      bullets: [
        "명도 대비(본문 4.5:1 이상)와 포커스 링 유지",
        "시맨틱 영역(h1~h3/section/nav/footer) 준수",
        "링크/버튼 라벨의 맥락 명시(예: ‘자세히 보기’ 대신 목적 포함)",
      ],
    },
    {
      title: "Visit Info",
      bullets: [
        "고객센터: 1588-1234",
        "운영시간: 평일 09:00–19:00 / 주말 09:00–17:00",
        "주소: 서울특별시 강남구 테헤란로 123, 리브빌딩 10층",
        "대표/사업자/연락처·이메일: 사이트 푸터 기준",
      ],
      paragraphs: [
        "상담/견적 CTA는 상단/하단에서 모두 진입 가능하도록 배치(중복 진입 동선).",
      ],
    },
    {
      title: "Code Snippet",
      code: [
        {
          lang: "tsx",
          content: `type Room = { id:string; title:string; features:string[] };
const ROOMS: Room[] = [
  { id:"dining", title:"Diningroom", features:["테이블","수전","시스템 수납장","조명"] },
  { id:"bath",   title:"Bathroom",   features:["욕조","수전/샤워기","타일/바닥","조명/히팅"] },
  { id:"living", title:"Livingroom", features:["소파","TV스탠드/월장식","창문/커버링","테이블"] },
];

export function RoomSection() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {ROOMS.map((r) => (
        <article key={r.id} className="rounded-xl border bg-white dark:bg-zinc-900 p-5">
          <h3 className="text-base font-semibold">{r.title}</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300">
            {r.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </article>
      ))}
    </section>
  );
}`,
        },
      ],
    },
    {
      title: "Results (수치 직접 교체 권장)",
      bullets: [
        "공간/스타일 진입률 상승(히어로→섹션 카드 유도)",
        "상담/견적 CTA 클릭률 개선",
        "모바일 LCP 안정화 및 스크롤 이탈률 감소",
      ],
    },
    {
      title: "Next Steps",
      bullets: [
        "Virtual(3D/AR) 체험 강화 및 제품 상세 스펙 시트화",
        "뉴스/미디어 CMS 연동, 태그/검색 고도화",
        "다국어(ko/en) 및 지역 캠페인 랜딩",
      ],
    },
  ],
},
  //CarMore
  {
    id: "carmore",
    title: "[Carmore] 랜딩페이지",
    client: "Carmore",
    cover: (
            <video
            src="/videos/carmore.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            />
            ),
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2022/03/21 → 2022/04/28",
    summary:
    "중고차·장기렌트/리스 상담 전환 중심 랜딩. 특가 프로모션, 선납금 0원 기준 견적, 맞춤 상담 폼, 인기 차량/후기/FAQ 섹션으로 퍼널 구성.",
  sections: [
    {
      title: "Goals",
      bullets: [
        "프로모션 가시성 강화: 선착순 특가·최대 30% 할인 카피 상단 고정",
        "신뢰/가치 제안 명확화: 선납금 0원 기준·맞춤형 컨설팅·사후관리",
        "전환율 향상: ‘무료 상담’ 폼·전화번호·운영시간 다중 노출",
        "모바일 우선: 카드/그리드·큰 CTA·간결한 카피로 스크롤 퍼널 최적화",
      ],
    },
    {
      title: "Information Architecture",
      bullets: [
        "GNB: 최저가 차량 · 내 차 구매 · 평생책임 서비스 · 오시는길 · 상담문의",
        "히어로: 특가/할인 혜택 카피 + 상담받기 CTA",
        "Benefits: 선납금 0원 기준·맞춤형 솔루션·공식 서비스센터·브랜드 신뢰",
        "상담 섹션: 이름/연락처/희망차종 + 약관 동의",
        "FAQ: 견적 기준·구매 자격·수리비·신뢰성 Q&A",
        "실시간 인기 차량 카드, 이용 후기(별점/코멘트)",
        "푸터: 대표전화·사업자/주소 고지 및 유의 문구",
      ],
      paragraphs: [
        "자주 쓰는 전환(전화/상담)과 정보(FAQ/실시간 인기 차량)를 홈 내에서 모두 노출해 이탈 없이 퍼널을 마무리하도록 설계.",
      ],
    },
    {
      title: "Key Features",
      bullets: [
        "프로모션: “특가 차량 할인이벤트 / 인기모델 최대 30% 할인”, “선납금 0원 기준 100만원 추가할인” 카피",
        "신뢰 요소: ‘맞춤형 컨설팅’, ‘공식 서비스 센터 OPEN’ 등 장점 나열",
        "실시간 인기 차량: 차종/연식/주행거리/월 리스료 카드형 리스트",
        "리뷰: 실제 구매자 코멘트 요약(별점/차종 함께)",
        "CTA 다중 배치: 상단/중단 상담 버튼 + 하단 대표전화/운영시간",
      ],
    },
    {
      title: "Visit Info",
      bullets: [
        "상담문의: 1544-1234 (평일 09:00–19:00 / 주말 10:00–17:00)",
        "대표전화: 1800-0000 (24시간 상담 가능)",
        "주소/사업자 정보: 하단 푸터 고지",
        "유의사항: 중고차 특성상 시세 변동 및 상담 결과에 따라 금액 상이",
      ],
    },
    {
      title: "Accessibility",
      bullets: [
        "큰 버튼·명확한 레이블로 모바일 터치 타게팅 보장",
        "CTA·전화 링크에 목적형 라벨 제공(예: “무료 상담 받기”, “전화 연결”)",
        "명도 대비 준수와 포커스 링 유지, 폼 필수 항목 시각/스크린리더 안내",
      ],
    },
    {
      title: "FAQ Highlights",
      bullets: [
        "견적 기준: 선납금 0원 기준 금액 고지, 특가 차량은 추가 할인",
        "구매 자격: 사회초년생/대학생 등도 최저가로 구매 가능",
        "수리비: 공식 서비스센터 운영으로 점검/소모품/공임 지원",
        "신뢰성: 다수 고객 구매 사례와 후기 기반의 신뢰 확보",
      ],
    },
    {
      title: "Code Snippet",
      code: [
        {
          lang: "tsx",
          content: `type Vehicle = { id:string; name:string; spec:string; price:string; perMonth:string; liked:number };
const VEHICLES: Vehicle[] = [
  { id:"seltos-24", name:"2024 셀토스", spec:"1.6 가솔린 터보 · 2023/09 · 20,134km", price:"3,155만원", perMonth:"월 42만원", liked:33 },
];

export function VehicleCards() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {VEHICLES.map(v => (
        <article key={v.id} className="rounded-xl border bg-white dark:bg-zinc-900 p-5">
          <h3 className="text-base font-semibold">{v.name}</h3>
          <p className="mt-1 text-sm text-zinc-500">{v.spec}</p>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="font-medium">{v.price}</span>
            <span className="text-zinc-500">{v.perMonth}</span>
          </div>
          <div className="mt-3 text-xs text-zinc-400">♡ {v.liked}</div>
          <button className="mt-4 w-full rounded-lg border px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800">
            무료 상담 받기
          </button>
        </article>
      ))}
    </section>
  );
}`,
        },
      ],
    },
    {
      title: "Results (수치 직접 교체 권장)",
      bullets: [
        "상담 폼 제출 전환률 상승(다중 CTA/상단 고정 효과)",
        "모바일 LCP 안정화(영역 분할·지연 로딩)",
        "FAQ 조회 이후 상담 진입률 개선",
      ],
    },
    {
      title: "Next Steps",
      bullets: [
        "차량 데이터 페이징/필터(차종·예산·연식·주행거리) 고도화",
        "리뷰/후기 CMS 연동, 썸네일·메타 데이터 자동화",
        "리스크 고지/약관 체크 UX 개선(동의 항목 분리·가이드 텍스트)",
      ],
    },
  ],
},
  //Toss
  {
    id: "Toss",
    title: "[Clone] Toss 홈페이지",
    client: "Toss",
    cover: (
            <video
            src="/videos/toss.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            />
            ),
    tags: ["Website", "Responsive", "UI/UX"],
    period: "2025/07/07 → 2025/07/14",
  summary:
    "여백 중심 타이포와 명확한 대비, 간결한 카피/CTA, 부드러운 모션으로 구성한 Toss 스타일 클론. 홈 히어로→핵심 기능→보안/신뢰→FAQ→다운로드 CTA 흐름으로 재배치.",
  sections: [
    {
      title: "Goals",
      bullets: [
        "여백·타이포·대비 중심의 미니멀 UI 재현",
        "핵심 가치 제안(간단·안전·빠름) 명료화",
        "모바일 우선 스케일과 접근성 준수",
        "스크롤 이탈 감소와 CTA 진입률 개선",
      ],
    },
    {
      title: "Information Architecture",
      bullets: [
        "Hero: 간결한 카피 + 주요 CTA(앱 다운로드/자세히 보기)",
        "Features: 송금·결제·자산·보험 등 핵심 기능 카드",
        "Security & Trust: 보안 소개, 인증·암호화 안내",
        "FAQ: 가입·보안·이체 한도 등 자주 묻는 질문",
        "Footer: 약관/개인정보/고객센터/사업자 고지",
      ],
      paragraphs: [
        "상단 고정 내비(투명→스크롤 시 배경)와, 섹션별 1 핵심 메시지 원칙으로 가독성을 유지.",
      ],
    },
    {
      title: "Key Features",
      bullets: [
        "히어로: 큰 헤드라인·짧은 서브카피·단일 주 CTA",
        "기능 카드: 아이콘·짧은 설명·‘자세히’ 보조 링크",
        "신뢰 요소: 보안 배지·고객센터 노출·정책 링크",
        "FAQ 아코디언: 질문 요약/답변 최소 단락화",
        "퍼포먼스: lazy-loading, 폰트 스왑, 라우트 단위 코드 분할",
      ],
    },
    {
      title: "Design Tokens",
      bullets: [
        "Color: Primary(파랑 계열), Surface(백/암), Text(강한 대비)",
        "Radius: 12–24(카드/버튼), Shadow: 낮은 고도",
        "Spacing: 4/8/12/16/24/32 scale, Max-width 1200~1280",
        "Type: 굵은 헤드라인 + 가독성 높은 본문",
      ],
      paragraphs: [
        "CTA는 한 화면 1개 원칙(주 버튼만 강조)으로 시각적 혼선을 줄임.",
      ],
    },
    {
      title: "Motion & Interactions",
      bullets: [
        "스크롤 진입 시 페이드·살짝 이동(reveal) 모션",
        "호버 시 카드 미세 상승·그림자 강화",
        "‘reduce motion’ 환경설정 시 모션 최소화",
      ],
    },
    {
      title: "Accessibility",
      bullets: [
        "텍스트 대비 4.5:1 이상, 링크/버튼 포커스 링 유지",
        "시맨틱 구조(h1~h3/section/nav/footer) 준수",
        "아이콘에는 시각적 의미를 텍스트로 보완",
      ],
    },
    {
      title: "Code Snippet",
      code: [
        {
          lang: "tsx",
          content: `function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        금융을 더 쉽게
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-300">
        간단하고 안전한 금융 경험을 위한 클론 랜딩 페이지
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a
          href="#download"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          앱 다운로드
        </a>
        <a
          href="#features"
          className="rounded-xl border px-5 py-3 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          자세히 보기
        </a>
      </div>
    </section>
  );
}`,
        },
      ],
    },
    {
      title: "Results (수치 직접 교체 권장)",
      bullets: [
        "모바일 LCP 안정화(히어로 최적화·이미지 지연 로딩)",
        "첫 스크린 CTA 클릭률 상승",
        "FAQ 조회 후 이탈률 감소",
      ],
    },
    {
      title: "Next Steps",
      bullets: [
        "기능별 상세(송금/결제/자산) 라우트 분리 및 A/B 테스트",
        "아이콘 세트·토큰 시스템 라이브러리화",
        "국문/영문 다국어 및 접근성 자동 점검 워크플로",
      ],
    },
  ],
},
  //Apple
  {
    id: "apple",
    title: "[Clone] Apple 홈페이지",
    client: "Apple",
    cover: (
            <video
            src="/videos/apple.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            />
            ),
    tags: ["Website", "Responsive", "UI/UX"],
     period: "2025/07/07 → 2025/07/15",
  summary:
    "제품 히어로(대형 타이포·미디어) 중심의 간결한 내러티브, 강한 대비와 절제된 모션, 스크롤 스냅 섹션 구성으로 Apple 스타일을 재현한 클론.",
  sections: [
    {
      title: "Goals",
      bullets: [
        "제품 중심 스토리텔링: 한 화면 한 메시지",
        "명확한 대비와 단순한 CTA(구매/자세히 보기)",
        "절제된 모션·고품질 타이포 스케일",
        "접근성/성능 기준 준수(모바일 우선)",
      ],
    },
    {
      title: "Information Architecture",
      bullets: [
        "Hero: 제품명·핵심 카피·주 CTA",
        "Feature Sections: 핵심 기능/소재/디테일 강조",
        "Compare / Tech Specs: 사양·비교(요약 표)",
        "Buy CTA: 가격/구성 선택 진입",
        "Support/FAQ: 구매 전 확인 정보",
        "Footer: 법적 표기·정책·고객센터",
      ],
      paragraphs: [
        "상단 내비는 투명 → 스크롤 시 배경 적용, 섹션은 스냅 스크롤/큰 여백으로 구획.",
      ],
    },
    {
      title: "Key Features",
      bullets: [
        "대형 히어로 타이포 + 보조 카피",
        "단일 주 CTA(구매하기) + 보조 CTA(자세히 보기)",
        "스크롤 스냅 섹션(제품 각 포인트를 1장면 1메시지로)",
        "가격/옵션 티저 → ‘구매’ 라우트로 자연스러운 연결",
        "법적 문구/주의 사항은 하단에 축약 노출",
      ],
    },
    {
      title: "Design Tokens",
      bullets: [
        "Color: Black/White 대비, 중립 그레이 단계",
        "Type Scale: 헤드라인 48–64, 본문 16–18",
        "Radius: 12–24, Shadow: very low",
        "Spacing: 4/8/12/16/24/32 scale, max-w 1200–1280",
      ],
      paragraphs: [
        "CTA는 화면당 1개 원칙으로 시선 분산을 최소화.",
      ],
    },
    {
      title: "Motion & Interactions",
      bullets: [
        "섹션 진입 시 미세 페이드/트랜스레이트(reveal)",
        "호버 시 버튼/카드 그림자·밝기 미세 변화",
        "prefers-reduced-motion 존중(모션 최소화)",
      ],
    },
    {
      title: "Accessibility",
      bullets: [
        "텍스트 대비 4.5:1 이상, 포커스 링 유지",
        "시맨틱 구조(h1~h3/section/nav/footer) 준수",
        "아이콘/미디어에는 대체 텍스트 또는 보조 설명 제공",
      ],
    },
    {
      title: "Code Snippet",
      code: [
        {
          lang: "tsx",
          content: `function ProductHero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        더 강력해진 <span className="block">Apple 스타일 클론</span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
        한 화면, 한 메시지. 간결한 카피와 절제된 모션으로 제품에만 집중하세요.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a
          href="#buy"
          className="rounded-2xl bg-black px-6 py-3 text-white hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100"
        >
          구매하기
        </a>
        <a
          href="#details"
          className="rounded-2xl border px-6 py-3 text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          자세히 보기
        </a>
      </div>
    </section>
  );
}

function SnapSection({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="snap-start mx-auto max-w-5xl px-4 py-28 text-center">
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">{desc}</p>
    </section>
  );
}`,
        },
      ],
    },
    {
      title: "Results (수치 직접 교체 권장)",
      bullets: [
        "히어로 CTA 클릭률 상승",
        "스크롤 이탈률 감소(섹션 스냅/메시지 단순화)",
        "모바일 LCP 안정화",
      ],
    },
    {
      title: "Next Steps",
      bullets: [
        "구매 플로우(옵션/색상/스토리지) 단계화",
        "비교·사양 표를 데이터화하여 재사용",
        "다국어(ko/en) 및 A/B 테스트",
      ],
    },
  ],
},
  //Notion
  {
    id: "notion",
    title: "[Notion] 포트폴리오",
    client: "Notion",
    cover: (
            <video
            src="/videos/notion.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            />
            ),
    link: "https://quilt-wombat-0e8.notion.site/Web-Publisher-Portfolio-1f3b276b29738079ae2ee3416e4fa9a1?pvs=74",
    tags: ["Notion", "Portfolio"],
    period: "2025/02/17 → 2025/09/18",
    summary: "Notion 활용한 포트폴리오"
},
];

export function getProject(id: string): PortfolioProject | undefined {
  return PROJECTS.find((p) => p.id === id);
}