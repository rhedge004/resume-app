import ContactList from "@/components/feature/ContactList";
import ContactMe from "@/components/feature/ContactMe";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen shadow-lg">
      <main className="flex-grow m-5">
        <div className="flex flex-col md:flex-wrap md:flex-row">
          <div className="w-full md:w-[45%]">
            <h1 className="text-[2em] font-semi-bold">Connect with Me</h1>
            <ContactList />
          </div>
          <div className="w-full md:w-1/2">
            <h1>Contact Me</h1>
            <ContactMe />
          </div>
        </div>
      </main>
    </div>
  );
}
