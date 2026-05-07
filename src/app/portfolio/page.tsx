"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/logos";

interface Project {
  title: string;
  description: string;
  images: string[];
  url?: string;
  tags: string[];
  githubFrontend?: string;
  githubBackend?: string;
}

const projects: Project[] = [
  {
    title: "Clothing Store",
    description: `A modern e-commerce web application built with Next.js and Springboot.
This is the part of a clothing store's website that customers see and use when they visit to shop. It's like the storefront and checkout counter of a physical clothing store, but online.
The website was built using modern web technology to make it fast, responsive (works great on phones and computers), and easy to navigate. It's designed to give customers a smooth, enjoyable shopping experience; similar to browsing a physical store, but from home.
I personally came up with the design from scratch, keeping in mind my experiences with online shops and improving the experience as I see fit.
`,
    images: [
      "/portfolio/clothing1.png",
      "/portfolio/clothing2.png",
      "/portfolio/clothing3.png",
    ],
    url: "https://rhedge004.github.io/clothing-store-fe/",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Spring Boot",
      "Java",
      "MySQL",
    ],
    githubFrontend: "https://github.com/rhedge004/clothing-store-fe",
    githubBackend: "https://github.com/rhedge004/clothing-store",
  },
  {
    title: "Prop-Intel",
    description: `Imagine visiting a website and, instead of just scrolling through lists of houses, a friendly, life-like digital person pops up to help you. This is the purpose of the project. Think of it as a 24/7 digital concierge. You can actually talk to it using your voice or type questions like, "Tell me more about the kitchen in the house on Smith Street," and it will respond intelligently. Unlike a static "chatbot" that only gives text answers, this avatar looks and speaks like a real person. It changes its behavior based on what’s happening—it "listens" when you speak, "thinks" while looking up information, and "talks" back to you with synchronized video.`,
    images: [
      "/portfolio/real-estate1.png",
      "/portfolio/real-estate2.png",
      "/portfolio/real-estate3.png",
      "/portfolio/real-estate4.png",
    ],
    url: "https://www.prop-intel.ai",
    tags: [
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "Azure",
      "Azure Speech Services",
      "Azure OpenAI",
    ],
  },

  {
    title: "Shopping Cart",
    description:
      "A shopping list web application built with modern web technologies. It helps users organize and manage their shopping items in an easy-to-use interface.",
    images: ["/portfolio/shopping1.png", "/portfolio/shopping2.png"],
    url: "https://rhedge004.github.io/shopping-list-application/",
    tags: ["React", "NextJS", "Javascript", "Typescript", "Tailwind CSS"],
    githubFrontend: "https://github.com/rhedge004/shopping-list-application",
  },
  {
    title: "Real Estate AU Clone",
    description: "A clone of the realestate.com.au website built with Next.js.",
    images: ["/portfolio/clone1.png"],
    url: "https://rhedge004.github.io/real-estate/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubFrontend: "https://github.com/rhedge004/real-estate",
  },
  {
    title: "Online Resume",
    description:
      "This is a web application that serves as an interactive resume or portfolio for myself as a frontend developer. Think of it like a modern, interactive version of a traditional resume that you'd see on a computer screen.",
    images: [
      "/portfolio/resume1.png",
      "/portfolio/resume2.png",
      "/portfolio/resume3.png",
    ],
    url: "https://rhedge004.github.io/resume-app/",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
      "Lucide Icons",
      "Radix UI",
    ],
    githubFrontend: "https://github.com/rhedge004/resume-app",
  },
];

export default function Portfolio() {
  const [expandedImage, setExpandedImage] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/30">
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Portfolio
            </h1>
            <p className="text-lg text-blue-600 font-medium mt-2">
              A showcase of my recent web development projects and technical
              experiments.
            </p>
            <div className="h-1 w-20 bg-blue-300 mt-4 rounded-full" />
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Stacked Image Gallery Container */}
                <div className="relative aspect-video bg-gray-50/50 border-b border-gray-100 p-8 flex items-center justify-center overflow-hidden">
                  {[...project.images]
                    .slice(0, 3)
                    .reverse()
                    .map((img, revIndex) => {
                      // Since we reversed to handle z-index correctly,
                      // we calculate the actual index to determine offsets
                      const totalShown = Math.min(project.images.length, 3);
                      const i = totalShown - 1 - revIndex;

                      return (
                        <div
                          key={i} // Use 'i' for the key as it's the actual index in the original array
                          onClick={() =>
                            setExpandedImage({
                              projectIndex: index,
                              imageIndex: i,
                            })
                          }
                          className={`absolute inset-6 transition-all duration-500 rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white cursor-pointer
                          ${
                            i === 0
                              ? "z-30 rotate-0 group-hover:-translate-y-4 group-hover:scale-[1.05]"
                              : i === 1
                                ? "z-20 translate-x-3 translate-y-1 rotate-3 group-hover:translate-x-5 group-hover:rotate-6"
                                : "z-10 -translate-x-3 translate-y-2 -rotate-3 group-hover:-translate-x-5 group-hover:-rotate-6"
                          }
                        `}
                        >
                          <Image
                            src={`${basePath}${img}`}
                            alt={`Preview ${i + 1} of ${project.title}`} // Use 'i' for alt text
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      );
                    })}

                  {/* Gallery Indicator Badge */}
                  {project.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md z-40 border border-white/20 pointer-events-none">
                      {project.images.length} PREVIEWS
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.url ? (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {(project.githubFrontend || project.githubBackend) && (
                    <div className="mt-4 flex items-center gap-4 text-xs font-medium border-t border-gray-50 pt-4">
                      <span className="text-gray-400 uppercase tracking-wider">
                        Source:
                      </span>
                      <div className="flex gap-3">
                        {project.githubFrontend && (
                          <Link
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <GithubIcon
                              width={14}
                              height={14}
                              fill="currentColor"
                            />
                            Frontend
                          </Link>
                        )}
                        {project.githubBackend && (
                          <Link
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <GithubIcon
                              width={14}
                              height={14}
                              fill="currentColor"
                            />
                            Backend
                          </Link>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox / Image Expansion Overlay */}
      {expandedImage && ( // Only render if an image is expanded
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light transition-colors z-50"
            onClick={() => setExpandedImage(null)}
          >
            &times;
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center">
            <Image
              src={`${basePath}${projects[expandedImage.projectIndex].images[expandedImage.imageIndex]}`}
              alt={`Expanded view of ${projects[expandedImage.projectIndex].title}`}
              fill
              className="object-contain"
              priority
            />

            {/* Navigation Buttons */}
            {projects[expandedImage.projectIndex].images.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-gray-900/60 hover:bg-gray-900/80 text-white p-3 rounded-full transition-all shadow-xl backdrop-blur-sm z-50 disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing lightbox
                    setExpandedImage((prev) => {
                      if (!prev) return null;
                      const newImageIndex = prev.imageIndex - 1;
                      if (newImageIndex < 0) return prev; // Should be disabled
                      return { ...prev, imageIndex: newImageIndex };
                    });
                  }}
                  disabled={expandedImage.imageIndex === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-gray-900/60 hover:bg-gray-900/80 text-white p-3 rounded-full transition-all shadow-xl backdrop-blur-sm z-50 disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent closing lightbox
                    setExpandedImage((prev) => {
                      if (!prev) return null;
                      const newImageIndex = prev.imageIndex + 1;
                      if (
                        newImageIndex >=
                        projects[prev.projectIndex].images.length
                      )
                        return prev; // Should be disabled
                      return { ...prev, imageIndex: newImageIndex };
                    });
                  }}
                  disabled={
                    expandedImage.imageIndex ===
                    projects[expandedImage.projectIndex].images.length - 1
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
