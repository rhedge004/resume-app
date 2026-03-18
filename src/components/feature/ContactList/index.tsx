import { GithubIcon, LinkedInIcon } from "@/components/ui/logos";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactList() {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center gap-4 p-1 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="shrink-0 h-10 w-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
          <MapPin className="h-5 w-5" />
        </div>
        <p className="text-gray-600">
          021 Barangay San Luis, Santo Tomas, Batangas 4234
        </p>
      </div>
      <div className="flex items-center gap-4 p-1 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="shrink-0 h-10 w-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
          <Phone className="h-5 w-5" />
        </div>
        <p className="text-gray-600">+639062579514</p>
      </div>
      <div className="flex items-center gap-4 p-1 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="shrink-0 h-10 w-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
          <Mail className="h-5 w-5" />
        </div>
        <a
          href="mailto:rhedge004@gmail.com"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          rhedge004@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-4 p-1 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="shrink-0 h-10 w-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
          <GithubIcon width={20} height={20} />
        </div>
        <Link
          href="https://github.com/rhedge004"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          target="_blank"
        >
          github.com/rhedge004
        </Link>
      </div>
      <div className="flex items-center gap-4 p-1 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="shrink-0 h-10 w-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
          <LinkedInIcon width={20} height={20} />
        </div>
        <Link
          href="https://www.linkedin.com/in/rhedge004/"
          className="text-gray-600 hover:text-blue-600 transition-colors"
          target="_blank"
        >
          linkedin.com/in/rhedge004/
        </Link>
      </div>
    </div>
  );
}
