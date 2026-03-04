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
    title: "Software Engineer",
    company: "Freelance",
    period: "April 2025 - Present",
    description:
      "Developed and maintained multiple web applications and mobile apps. Created responsive designs, integrated third-party APIs, and implemented best practices for code quality and performance optimization.",
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
    title: "Software Engineer",
    company: "Samsung R&D Institute Philippines",
    period: "March 2023 - April 2025",
    description:
      "Developed and maintained multiple projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality. Led the development of web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
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
    ],
  },
  {
    title: "Software Engineer",
    company: "Twist Resources",
    period: "November 2021 - February 2023",
    description:
      "Developed and maintained multiple projects including iOS apps, implemented responsive designs, and integrated third-party APIs for enhanced functionality. Write unit tests newly created code on both backend and frontend.",
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
      "Created responsive and interactive user interfaces, responsive Kiosk UI, collaborated with designers, and optimized application performance.",
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
      "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
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
