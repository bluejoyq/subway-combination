import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
export default function AppFooter() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <span className="flex gap-1 items-center">
          <FaCopyright /> <span>2024, bluejoyq</span>
        </span>
        <Link href={"/license"} className="flex gap-1 items-center">
          <FaExternalLinkAlt />
          <span>오픈소스 라이센스</span>
        </Link>
      </aside>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <div className="grid grid-flow-col gap-4">
          <Link href={"https://github.com/bluejoyq"}>
            <FaGithub size={24} />
          </Link>
          <Link href={"mailto:bluejoy32@gmail.com"}>
            <MdEmail size={24} />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
