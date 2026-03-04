import Image from "next/image";
import Timeline from "@/components/feature/Timeline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { basePath, getAge } from "@/lib/utils";
import ContactList from "@/components/feature/ContactList";
import SkillList from "@/components/feature/SkillList";
import { birthday, workStartDate } from "@/lib/constants";

interface Contents {
  title: string;
  content: () => React.ReactElement;
  href: string;
}

const contents: Contents[] = [
  {
    title: "About Me",
    content: () => (
      <p>
        My name is Rhedge Michael Navarro, I&apos;m {getAge(birthday)} and
        currently residing in Santo Tomas, Batangas, Philippines. I hold a
        Bachelor of Science in Information Technology (BSIT), which I completed
        in 2017. Since graduation, I&apos;ve spent 5 years in the IT industry,
        specializing in Frontend Development.
        <br />
        <br />I am fluent in both English and Filipino. I pride myself on having
        excellent communication and presentation skills.
      </p>
    ),
    href: "/about",
  },
  {
    title: "Skills",
    content: () => <SkillList />,
    href: "/experience",
  },
  {
    title: "Work Experience",
    content: () => <Timeline />,
    href: "/experience",
  },
  {
    title: "Contact",
    content: () => <ContactList />,
    href: "/contact",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/30">
      <main className="flex-grow w-full px-4 md:px-8 py-10">
        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start animate-in fade-in duration-700">
            <div className="w-full lg:w-1/3 xl:w-1/4 flex-shrink-0">
              <div className="relative aspect-square w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/5 bg-white">
                <Image
                  src={`${basePath}/image.png`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Profile Picture of Rhedge Michael Navarro"
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 xl:w-3/4 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  Overview
                </h1>
                <p className="text-lg text-gray-500 mt-2 font-medium">
                  {getAge(birthday)}{" "}
                  <span className="text-blue-500 px-2">/</span> Philippines{" "}
                  <span className="text-blue-500 px-2">/</span> Software
                  Engineer
                </p>
              </div>
              <div className="h-1 w-20 bg-blue-500 rounded-full" />
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                I am a Software Engineer specializing in frontend development.
                With {getAge(workStartDate)} years of professional experience,
                my expertise spans both the design and technical aspects of
                software development, with a focus on modern frameworks like{" "}
                <strong>React</strong>, <strong>Next.js</strong> and{" "}
                <strong>Typescript</strong>. Along with a strong command of
                modern CSS frameworks like <strong>Tailwind CSS</strong> I am
                actively seeking opportunities where I can apply my technical
                skills and contribute to a growth-oriented team.
                <br /> Please take a look at my online résumé, where I showcase
                my skills as a frontend developer.
              </p>
              <Link
                href="https://github.com/rhedge004/resume-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="mt-2 shadow-md hover:shadow-lg transition-all"
                >
                  View Source Code
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-700">
            {contents.map((content: Contents) => (
              <div
                key={content.title}
                className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-[500px]"
              >
                <div className="p-5 border-b border-gray-50 bg-gray-50/50">
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h2>
                </div>
                <div className="p-5 flex-grow overflow-hidden relative">
                  <div className="opacity-90 group-hover:opacity-100 transition-opacity">
                    {content.content()}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10 px-8">
                  <Link href={content.href} className="w-full">
                    <Button className="w-full shadow-md group-hover:scale-105 transition-transform duration-200">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
