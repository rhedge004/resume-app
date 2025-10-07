import { cn } from "@/lib/utils";

export default function ToolsList() {
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

  return (
    <div className="flex flex-wrap sm:rounded-lg max-w-lg mx-auto">
      {toolsData.map((tool, index) => (
        <div key={index} className={cn("w-[50%] p-2")}>
          {tool}
        </div>
      ))}
    </div>
  );
}
