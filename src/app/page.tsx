"use client";
import React from "react";
import { HeroParallax } from "../components/UI/HeroParallax";
import { NavbarDemo } from "../components/UI/NavbarDemo";
import AnimatedThemeTogglerDemo from '../components/MagicUI/AnimatedThemeTogglerDemo';
import SparklesPreview from "../components/UI/SparklesDemo";
import CardHoverEffectDemo from "../components/UI/CardHoverDemo";
import Page from "../app/portfolio/page"
import Footer from "../components/UI/FooterDemo"



export default HeroParallaxDemo


export function HeroParallaxDemo() {
  return (
    <>
      <NavbarDemo />
      <HeroParallax products={products} />
      <AnimatedThemeTogglerDemo />
      <CardHoverEffectDemo />
      <br /><br /><br /><br />
      <Page />
      <br /><br /><br /><br />
      <SparklesPreview />
      <Footer/>
    </>
  )
}
export const products = [
  {
    title: "부평종합시장",
    link: "https://bupyeongmarket.netlify.app/assets/pages/map",
    thumbnail:
      "https://i.ibb.co/JwDLNHW3/image-2.png",
  },
  {
    title: "부평종합시장",
    link: "https://bupyeongmarket.netlify.app/",
    thumbnail:
      "https://i.ibb.co/B5VMMNmL/image-3.png",
  },
   {
    title: "부평종합시장",
    link: "https://bupyeongmarket.netlify.app/",
    thumbnail:
      "https://i.ibb.co/fGXW622D/image-1.png",
  },

  {
    title: "부평종합시장",
    link: "https://bupyeongmarket.netlify.app/assets/pages/market",
    thumbnail:
      "https://i.ibb.co/DDwD1K8M/image-4.png",
  },
  {
    title: "부평종합시장",
    link: "https://bupyeongmarket.netlify.app/assets/pages/notice_list",
    thumbnail:
      "https://i.ibb.co/fdVnc5s8/image-5.png",
  },
   {
    title: "Liv;ON 인테리어",
    link: "https://liveon1018.netlify.app/gallery",
    thumbnail:
      "https://i.ibb.co/qF13VqbW/image-9.png",
  },
  {
    title: "Liv;ON 인테리어",
    link: "https://liveon1018.netlify.app/brand",
    thumbnail:
      "https://i.ibb.co/wr6GsFqR/image-6.png"
  },
    {
    title: "Liv;ON 인테리어",
    link: "https://liveon1018.netlify.app/product",
    thumbnail:
      "https://i.ibb.co/qLDDNC7Z/image-11.png",
  },
   {
    title: "Liv;ON 인테리어",
    link: "https://liveon1018.netlify.app/virtual",
    thumbnail:
      "https://i.ibb.co/MDT3wLdn/image-8.png",
  },
  {
    title: "Liv;ON 인테리어",
    link: "https://liveon1018.netlify.app/news",
    thumbnail:
      "https://i.ibb.co/992PXPrr/image-10-1.png",
  },
  {
    title: "Carmore 자동차",
    link: "https://carmore.netlify.app/",
    thumbnail:
      "https://i.ibb.co/k2nZ9hpx/image-10.png",
  },
  {
    title: "Carmore 자동차",
    link: "https://carmore.netlify.app/",
    thumbnail:
      "https://i.ibb.co/cXQ8yBzr/image-7.png",
  },
  {
    title: "Carmore 자동차",
    link: "https://carmore.netlify.app/",
    thumbnail:
      "https://i.ibb.co/7trmtQbQ/image-9.png",
    
  },
  {
    title: "Carmore 자동차",
    link: "https://carmore.netlify.app/",
    thumbnail:
      "https://i.ibb.co/snQ1s2M/image-34.png",
  },
  {
    title: "Carmore 자동차",
    link: "https://carmore.netlify.app/",
    thumbnail:
      "https://i.ibb.co/KjShpZnj/image-8.png",
  },
];
