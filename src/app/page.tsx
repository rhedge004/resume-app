import Image from "next/image";
import Timeline from "@/components/feature/Timeline";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { basePath, getAge } from "@/lib/utils";
import ContactList from "@/components/feature/ContactList";
import SkillList from "@/components/feature/SkillList";
import { birthday, workStartDate } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50/30">
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-in fade-in duration-700">
          {/* Left Column / Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative aspect-square w-full max-w-[260px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/5 bg-white">
              <Image
                src={`${basePath}/image.png`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="Profile Picture of Rhedge Michael Navarro"
                priority
              />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                Contact
              </h2>
              <ContactList />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                Skills
              </h2>
              <SkillList />
            </div>
          </div>

          {/* Right Column / Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Rhedge Michael Navarro
              </h1>
              <p className="text-xl text-blue-600 font-semibold mt-2">
                Software Engineer
              </p>

              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 font-medium">
                <span>{getAge(birthday)} years old</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span>Philippines</span>
              </div>

              <div className="h-px w-full bg-gray-100 my-6" />

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I am a Software Engineer specializing in frontend development.
                With {getAge(workStartDate)} years of professional experience,
                my expertise spans both the design and technical aspects of
                software development, with a focus on modern frameworks like{" "}
                <strong>React</strong>, <strong>Next.js</strong>, and{" "}
                <strong>TypeScript</strong>. Along with a strong command of
                modern CSS frameworks like <strong>Tailwind CSS</strong>, I am
                actively seeking opportunities where I can apply my technical
                skills and contribute to a growth-oriented team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Work Experience
              </h2>
              <Timeline />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
