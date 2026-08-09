"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const slides = [
  {
    image: "/images/home/dog-haven-south-africa-hero.webp",
    alt: "Dog and owner walking along a quiet South African coastal path",
    eyebrow: "Practical guidance for South African dog owners",
    heading: null,
    text: "Calm, locally aware guidance for a healthier, safer and happier life with your dog.",
    primary: { label: "Start here", href: "/start-here" },
    secondary: { label: "Explore Dog Haven", href: "#explore" },
  },
  {
    image: "/images/home/south-africa-dog-health-hero.webp",
    alt: "Dog owner checking a healthy dog during a calm outdoor care routine",
    eyebrow: "Health and safety",
    heading: "Prepare early and recognise when care should not wait",
    text: "Understand prevention, symptoms, routine care and emergency next steps without replacing a veterinarian.",
    primary: { label: "Dog health", href: "/health" },
    secondary: { label: "Emergency help", href: "/emergency" },
  },
  {
    image: "/images/home/south-africa-choosing-dog-hero.webp",
    alt: "Family calmly meeting two healthy dogs in a South African garden",
    eyebrow: "Choosing your dog",
    heading: "Find the individual dog that fits your real life",
    text: "Compare lifestyle, space, training, care and adoption questions before making a long-term decision.",
    primary: { label: "Explore dog breeds", href: "/breeds" },
    secondary: { label: "Adoption guides", href: "/adoption" },
  },
  {
    image: "/images/home/south-africa-dog-outdoors-hero.webp",
    alt: "Dog and owner walking through a sunny South African fynbos landscape",
    eyebrow: "South African dog life",
    heading: "Plan the walks, services, tools and costs around everyday life",
    text: "Explore locally relevant planning for outings, services, travel, household budgets and responsible ownership.",
    primary: { label: "Local dog guides", href: "/local" },
    secondary: { label: "Dog owner tools", href: "/tools" },
  },
] as const;

export function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(activeIndex + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      showSlide(0);
    } else if (event.key === "End") {
      event.preventDefault();
      showSlide(slides.length - 1);
    }
  };

  return (
    <section className="bg-cream px-0 py-0 sm:px-4 sm:py-5 lg:px-8" aria-label="Dog Haven highlights">
      <div
        className="relative mx-auto min-h-[500px] max-w-[90rem] overflow-hidden bg-navy shadow-soft outline-none sm:min-h-[540px] sm:rounded-[2rem] lg:min-h-[560px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Dog Haven South Africa featured guidance"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
          if (Math.abs(distance) > 48) showSlide(activeIndex + (distance < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={index === activeIndex ? "absolute inset-0" : "hidden"}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              width={1536}
              height={1024}
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="100vw"
              className="h-full w-full object-cover object-[66%_center] motion-reduce:transition-none"
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,56,0.92)_0%,rgba(7,27,56,0.76)_43%,rgba(7,27,56,0.18)_74%,rgba(7,27,56,0.08)_100%)]" />
        <div className="relative z-10 flex min-h-[500px] items-end sm:min-h-[540px] sm:items-center lg:min-h-[560px]">
          <div className="w-full px-5 pb-24 pt-24 sm:max-w-3xl sm:px-10 sm:pb-24 sm:pt-20 lg:px-16">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-honey">{slides[activeIndex].eyebrow}</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">Dog Haven South Africa</h1>
            {slides[activeIndex].heading ? <h2 className="mt-4 max-w-2xl text-xl font-black leading-tight text-white sm:text-2xl">{slides[activeIndex].heading}</h2> : null}
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">{slides[activeIndex].text}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={slides[activeIndex].primary.href} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-honey px-5 py-3 text-sm font-black text-navy outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
                {slides[activeIndex].primary.label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href={slides[activeIndex].secondary.href} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/55 bg-navy/25 px-5 py-3 text-sm font-black text-white outline-none backdrop-blur-sm transition hover:bg-white hover:text-navy focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
                {slides[activeIndex].secondary.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between gap-4 sm:bottom-7 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <div className="flex items-center gap-2" aria-label="Choose a slide">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => showSlide(index)}
                className={`h-2.5 rounded-full outline-none transition-all motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${index === activeIndex ? "w-8 bg-honey" : "w-2.5 bg-white/65 hover:bg-white"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous slide" onClick={() => showSlide(activeIndex - 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-navy/35 text-white outline-none backdrop-blur-sm transition hover:bg-white hover:text-navy focus-visible:ring-2 focus-visible:ring-white"><ChevronLeft className="h-5 w-5" aria-hidden="true" /></button>
            <button type="button" aria-label="Next slide" onClick={() => showSlide(activeIndex + 1)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-navy/35 text-white outline-none backdrop-blur-sm transition hover:bg-white hover:text-navy focus-visible:ring-2 focus-visible:ring-white"><ChevronRight className="h-5 w-5" aria-hidden="true" /></button>
          </div>
        </div>
        <p className="sr-only" aria-live="polite">Slide {activeIndex + 1} of {slides.length}: {slides[activeIndex].heading ?? "Dog Haven South Africa"}</p>
      </div>
    </section>
  );
}
