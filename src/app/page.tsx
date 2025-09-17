"use client";
import React from "react";
import { HeroParallax } from "../components/UI/HeroParallax";
import { NavbarDemo } from "../components/UI/NavbarDemo";
import AnimatedThemeTogglerDemo from '../components/MagicUI/AnimatedThemeTogglerDemo';
import SparklesPreview from "../components/UI/SparklesDemo";
import CardHoverEffectDemo from "@/components/UI/CardHoverDemo";
import Page from "../app/portfolio/page"


export default HeroParallaxDemo


export function HeroParallaxDemo() {
  return (
    <>
      <NavbarDemo />
      <HeroParallax products={products} />
      <AnimatedThemeTogglerDemo />
      <CardHoverEffectDemo />
      <Page />
      <SparklesPreview />
    </>
  )
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://i.ibb.co/fGXW622D/image-1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://i.ibb.co/JwDLNHW3/image-2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://i.ibb.co/B5VMMNmL/image-3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://i.ibb.co/DDwD1K8M/image-4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://i.ibb.co/fdVnc5s8/image-5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://i.ibb.co/wr6GsFqR/image-6.png"
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://i.ibb.co/qF13VqbW/image-9.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://i.ibb.co/992PXPrr/image-10-1.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://i.ibb.co/MDT3wLdn/image-8.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://i.ibb.co/qLDDNC7Z/image-11.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://i.ibb.co/MDnhJdyt/image-12.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://i.ibb.co/nFLkdMT/image-16.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://i.ibb.co/FLzVzTpH/image-15.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://i.ibb.co/ksTj5cNC/image-14.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://i.ibb.co/7dg1G5fR/image-13.png",
  },
];
