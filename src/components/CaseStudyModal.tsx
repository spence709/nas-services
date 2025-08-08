// components/CaseStudyModal.tsx
"use client";

import Image from "next/image";
import { X, CheckCircle, ChevronDown } from "lucide-react";
import { SuccessStory } from "@/types";
import { useEffect, useRef, useState } from "react";

type Props = {
  story: SuccessStory | null;
  onClose: () => void;
};

export default function CaseStudyModal({ story, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      setCanScroll(el.scrollHeight > el.clientHeight + 1);
      setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 2);
    };

    el.scrollTop = 0;
    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [story]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (not scrollable) */}
        <div className="relative shrink-0">
          <div className="h-64 overflow-hidden rounded-t-2xl">
            <Image
              src={story.imageUrl}
              alt={story.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* subtle overlay for contrast */}
          <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* title block */}
          <div className="absolute bottom-5 left-6 right-16">
            <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
              {story.title}
            </h1>
            <p className="text-blue-100 text-sm md:text-base mt-0.5">
              {story.subtitle}
            </p>
          </div>

          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/45 text-white hover:bg-black/70 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scroll area */}
        <div ref={scrollRef} className="flex-1 overflow-auto min-h-0">
          <div className="p-6 md:p-8 space-y-10">
            {/* Stats */}
            {story.stats?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {story.stats.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-gray-100 p-4 md:p-5 flex flex-col items-center text-center"
                  >
                    <div className="text-2xl font-bold text-blue-700 leading-none">
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
                <span className="mr-3 text-lg" aria-hidden>
                  🎯
                </span>
                The Challenge
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {story.challenge}
              </p>
            </section>

            {/* Key Results */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
                <span className="mr-3 text-lg" aria-hidden>
                  🚀
                </span>
                Key Results Delivered
              </h2>
              <ul className="space-y-3">
                {story.keyResults.map((result, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Impact */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 flex items-center">
                <span className="mr-3 text-lg" aria-hidden>
                  💡
                </span>
                The Impact
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                  {story.impact}
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-900 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6">
                {
                  "Let's discuss how we can help you achieve similar results for your organization."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-medium transition-colors cursor-pointer"
                >
                  Start Your Project
                </a>
                <button
                  onClick={() => {
                    onClose();
                    window.open(
                      "https://calendar.app.google/ZwVZLUTdUbKGs3KU8",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Schedule Consultation
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Scroll indicator */}
        {canScroll && !atBottom && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
            <ChevronDown className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
}
