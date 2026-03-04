import SkillList from "@/components/feature/SkillList";
import Timeline from "@/components/feature/Timeline";
import ToolsList from "@/components/feature/ToolsList";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 animate-in fade-in duration-700">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Experience & Skills
          </h1>
          <div className="h-1 w-20 bg-blue-500 mt-2 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Professional Experience
            </h2>
            <Timeline />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
            <SkillList />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Software & Tools
            </h2>
            <ToolsList />
          </div>
        </div>
      </div>
    </div>
  );
}
