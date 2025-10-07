import SkillList from "@/components/feature/SkillList";
import Timeline from "@/components/feature/Timeline";
import ToolsList from "@/components/feature/ToolsList";

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen shadow-lg">
      <main className="flex-grow m-5">
        <div className="flex flex-col md:flex-row md:flex-wrap">
          <div>
            <h1>Professional Experience</h1>
            <Timeline />
          </div>
          <div>
            <h1>Skills</h1>
            <SkillList />
          </div>
          <div>
            <h1>Software/Tools</h1>
            <ToolsList />
          </div>
        </div>
      </main>
    </div>
  );
}
