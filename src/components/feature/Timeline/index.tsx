import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface Experiences {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experiences[] = [
  {
    title: "Senior Frontend Developer",
    company: "Freelance - (Real Estate AI Project)",
    period: "December 2025 - Present",
    description:
      "Architected and developed the frontend for a cutting-edge Real Estate AI platform. Integrated Azure OpenAI and Azure Speech Services to deliver intelligent, voice-enabled property search and insights. Implemented interactive map features using the Google Maps API and built responsive, scalable interfaces with React, Next.js, and Tailwind CSS.",
    technologies: [
      "React",
      "NextJS",
      "Azure OpenAI",
      "Azure Speech Services",
      "Google Maps API",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "Angular",
      "MySQL",
      "Jest",
      "Javascript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Software Engineer",
    company: "Freelance - (B2B Projects)",
    period: "April 2025 - October 2025",
    description:
      "Engineered robust B2B web applications utilizing a versatile tech stack. Delivered responsive frontends with React, Next.js, and Angular, styled seamlessly using Tailwind CSS. Integrated these interfaces with scalable backend services powered by Symfony and Java, while ensuring reliable data handling with MySQL and high code quality through Jest.",
    technologies: [
      "React",
      "NextJS",
      "Symfony",
      "Tailwind CSS",
      "TypeScript",
      "Java",
      "Angular",
      "MySQL",
      "Jest",
      "Javascript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Samsung R&D Institute Philippines",
    period: "March 2023 - April 2025",
    description:
      "Spearheaded enterprise-level web development from the ground up. Architected complex, typed frontends using TypeScript, React, and Next.js alongside UI libraries like Material UI, Ant Design, and Shadcn/ui. Collaborated with backend teams using Python and Java, mentored junior developers, and enforced rigorous testing standards with Jest.",
    technologies: [
      "React",
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
      "Java",
      "Angular",
      "Python",
      "MySQL",
      "Jest",
      "Javascript",
      "HTML",
      "CSS",
      "Material UI",
      "Ant Design",
      "Shadcn/ui",
      "Figma",
    ],
  },
  {
    title: "Software Engineer",
    company: "Twist Resources",
    period: "November 2021 - February 2023",
    description:
      "Bridged mobile and web development by delivering cross-platform iOS applications using React Native and dynamic web interfaces with React and SCSS. Engineered full-stack solutions by integrating containerized Java Springboot backends, leveraging Redis for caching, PostgreSQL for data storage, and Docker for streamlined deployment.",
    technologies: [
      "React",
      "React Native",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Java",
      "Springboot",
      "SCSS",
      "Jest",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Cafisglobal Inc.",
    period: "June 2020 - November 2021",
    description:
      "Specialized in building highly interactive user interfaces, including custom responsive Kiosk applications, using React and React Native. Optimized application performance and streamlined asset delivery with Webpack, while crafting maintainable stylesheets with SASS and ensuring UI reliability through Jest.",
    technologies: [
      "React",
      "React Native",
      "JavaScript",
      "SASS",
      "Webpack",
      "Jest",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Sharesource Global",
    period: "June 2019 - April 2020",
    description:
      "Developed and maintained interactive single-page applications using React and vanilla JavaScript. Collaborated closely with design teams to translate mockups into pixel-perfect, responsive components styled with SASS. Configured Webpack for optimized build processes and implemented foundational unit tests.",
    technologies: [
      "React",
      "React Native",
      "JavaScript",
      "SASS",
      "Webpack",
      "Jest",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-gray-200 ml-3 space-y-12 pb-2">
      {experiences.map(
        ({ company, description, period, technologies, title }, index) => (
          <div key={index} className="relative pl-8">
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-blue-500 shadow-sm" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <div className="flex items-center text-sm text-gray-600 font-medium mt-1">
                  <Building2 className="w-3.5 h-3.5 mr-2 text-blue-500" />
                  {company}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0 bg-gray-100 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-3.5 h-3.5 mr-2" />
                {period}
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed text-base">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
