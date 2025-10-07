import Image from "next/image";
import Timeline from "@/components/feature/Timeline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAge } from "@/lib/utils";
import ContactList from "@/components/feature/ContactList";
import SkillList from "@/components/feature/SkillList";

interface Contents {
  title: string;
  content: () => React.ReactElement;
  href: string;
}

export default function Home() {
  const contents: Contents[] = [
    {
      title: "About Me",
      content: () => (
        <p>
          My name is Rhedge Michael Navarro, I&apos;m {getAge()} and currently
          residing in Santo Tomas, Batangas, Philippines. I hold a Bachelor of
          Science in Information Technology (BSIT), which I completed in 2017.
          Since graduation, I&apos;ve spent 5 years in the IT industry,
          specializing in Frontend Development.
          <br />
          <br />I am fluent in both English and Filipino. I pride myself on
          having excellent communication and presentation skills.
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
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow m-5">
        <div className="w-full space-y-5">
          <div className="flex flex-col sm:flex-row sm:space-x-0 sm:space-y-4 gap-5">
            <div className="w-full lg:w-[20%] shadow-lg">
              <Image
                className="rounded"
                src="/image.png"
                width={700}
                height={700}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={""}
              />
            </div>
            <div className="w-full">
              <h1>Overview</h1>
              <p className="text-[1em]">
                {getAge()} <span className="text-blue-400">/</span> Philippines{" "}
                <span className="text-blue-400">/</span> Software Engineer
              </p>
              <hr className="border-blue-500" />
              <p className="max-w-3/4">
                I am a Software Engineer specializing in frontend development.
                With 5 years of professional experience, my expertise spans both
                the design and technical aspects of software development, with a
                focus on modern frameworks like <strong>React</strong>,{" "}
                <strong>Next.js</strong> and <strong>Typescript</strong>. Along
                with a strong command of modern CSS frameworks like{" "}
                <strong>Tailwind CSS</strong> I am actively seeking
                opportunities where I can apply my technical skills and
                contribute to a growth-oriented team.
                <br /> Please take a look at my online résumé, where I showcase
                my skills as a frontend developer.
              </p>
              <Button size="lg" className="mt-2">
                View Source Code
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap">
            {contents.map((content: Contents, i: number) => (
              <div key={i} className="w-full relative md:w-1/2 lg:w-1/4 p-2">
                <div
                  className={`relative bg-white border-black h-[500px] max-h-[500px] overflow-hidden`}
                >
                  <h1>{content.title}</h1>
                  {content.content()}
                  <div className="absolute inset-x-0 bottom-0 h-[80px] bg-white/30 backdrop-blur-xs rounded"></div>
                  <Link href={content.href}>
                    <Button
                      variant="default"
                      className="absolute bottom-4 left-1/2 z-10 hover:cursor-pointer transition duration-300 hover:scale-105"
                    >
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
