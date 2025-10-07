import { GithubIcon, LinkedInIcon } from "@/components/ui/logos";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-shrink-0 flex flex-col items-center content-center bg-gray-800 text-white p-4">
      <p>Created by: Rhedge Michael Navarro</p>
      <div className="flex flex-row space-x-5 m-2">
        <Link href={"https://github.com/rhedge004"} target="_blank">
          <GithubIcon height={35} width={35} fill="#fff" />
        </Link>
        <Link href={"https://www.linkedin.com/in/rhedge004/"} target="_blank">
          <LinkedInIcon width={30} height={30} />
        </Link>
      </div>
    </footer>
  );
}
