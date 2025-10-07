import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface Experiences {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export default function Timeline() {
  const experiences: Experiences[] = [
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
  return (
    <div className="max-w-(--breakpoint-sm)">
      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />
        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-base font-medium">{company}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
