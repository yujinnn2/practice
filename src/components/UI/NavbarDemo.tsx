"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarMenu";
import { cn } from "../../app/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
      <p className="text-black dark:text-white">
        {/* The Navbar will show on top of the page */}
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Design</HoveredLink>
            <HoveredLink href="/individual">Frontend</HoveredLink>
            <HoveredLink href="/team">Library</HoveredLink>
            <HoveredLink href="/enterprise">Deployment</HoveredLink>
          </div>
        </MenuItem>        
        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="부평시장"
              href="https://bupyeongmarket.netlify.app/"
              src="https://i.ibb.co/gLVr5mFJ/image.png"
              description="부평시장 페이지 리뉴얼"
            />
            <ProductItem
              title="Liv;On 인테리어"
              href="https://liveon1018.netlify.app/"
              src="https://i.ibb.co/9mdGRVLb/image.png"
              description="인테리어 웹 페이지"
            />
            <ProductItem
              title="CarMore 중고차"
              href="https://carmore.netlify.app/"
              src="https://i.ibb.co/0yCWfY5X/image.png"
              description="중고차 랜딩페이지"
            />
            <ProductItem
              title="[Clone]Toss 홈페이지"
              href="https://yujintoss.netlify.app/"
              src="https://i.ibb.co/0yrFyzN8/image.png"
              description="토스 홈페이지 클론 "
            />
            <ProductItem
              title="[Clone]Apple 홈페이지"
              href="https://yujinappple.netlify.app/"
              src="https://i.ibb.co/FkzpJwkG/image.png"
              description="애플 홈페이지 클론 "
            />
            <ProductItem
              title="Notion 포트폴리오"
              href="https://quilt-wombat-0e8.notion.site/Web-Publisher-Portfolio-1f3b276b29738079ae2ee3416e4fa9a1?pvs=74"
              src="https://i.ibb.co/FkB6PjZ8/image-13.png"
              description="Notion 포트폴리오"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
