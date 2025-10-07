import { GithubIcon, LinkedInIcon } from "@/components/ui/logos";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactList() {
  return (
    <div className="flex-column space-y-2">
      <div className="flex gap-2">
        <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
          <MapPin className="h-5 w-5 text-muted-foreground" />
        </div>
        <p>021 Barangay San Luis, Santo Tomas, Batangas 4234</p>
      </div>
      <div className="flex gap-2">
        <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
          <Phone className="h-5 w-5 text-muted-foreground" />
        </div>
        <p> +639062579514</p>
      </div>
      <div className="flex gap-2">
        <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
          <Mail className="h-5 w-5 text-muted-foreground" />
        </div>
        <a href="mailto:rhedge004@gmail.com">rhedge004@gmail.com</a>
      </div>
      <div className="flex gap-2">
        <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
          <GithubIcon width={60} height={60} />
        </div>
        <Link
          href="https://github.com/rhedge004"
          className="underline"
          target="_blank"
        >
          github.com/rhedge004
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="shrink-0 h-9 w-9 bg-blue-500 rounded-full flex items-center justify-center">
          <LinkedInIcon width={50} height={50} />
        </div>
        <Link
          href="https://www.linkedin.com/in/rhedge004/"
          className="underline"
          target="_blank"
        >
          linkedin.com/in/rhedge004/
        </Link>
      </div>
    </div>
  );
}
