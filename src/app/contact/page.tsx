import ContactList from "@/components/feature/ContactList";
import ContactMe from "@/components/feature/ContactMe";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
          <div className="h-1 w-20 bg-blue-500 mt-2 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Connect with Me
            </h2>
            <ContactList />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send a Message
            </h2>
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}
