import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function AppFooter() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <p>© 2024, bluejoyq</p>
        <Link href={"/license"}>오픈소스 라이센스</Link>
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
