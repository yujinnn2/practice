// 예: app/page.tsx 또는 원하는 레이아웃/페이지 하단
import FooterContacts from "./FooterContacts";

export default function Footer() {
  return (
    <main className="">
      <FooterContacts
        className="mt-0"
        homepage="https://quilt-wombat-0e8.notion.site/Web-Publisher-Portfolio-1f3b276b29738079ae2ee3416e4fa9a1?pvs=74"
        github="https://github.com/yujinnn2"
        email="mailto:yujinee11@naver.com"
        phone="tel:+821056626191"
      />
    </main>
  );
}
