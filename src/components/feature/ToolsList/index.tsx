import { Badge } from "@/components/ui/badge";

const toolsData: string[] = [
  "IntelliJ Idea",
  "Visual Studio Code (VS Code)",
  "WebStorm",
  "React",
  "Vue.js",
  "Angular",
  "Next.js",
  "Svelte",
  "jQuery",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "npm",
  "Yarn",
  "Git",
  "GitHub",
  "Webpack",
  "Figma",
  "Chrome DevTools",
  "Jest",
  "ESLint",
  "TypeScript",
  "HTML",
  "CSS",
  "JavaScript",
  "DBeaver",
  "MySQL Workbench",
  "Docker",
  "XCode",
  "CLI",
  "POSTMAN",
];

export default function ToolsList() {
  return (
    <div className="flex flex-wrap gap-2">
      {toolsData.map((tool) => (
        <Badge key={tool} variant="secondary" className="text-sm py-1 px-3">
          {tool}
        </Badge>
      ))}
    </div>
  );
}
