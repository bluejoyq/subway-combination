import data from "@/../licenses.json";
import AppWrapper from "@/components/AppWrapper";
import { NpmLicense } from "@/models/NpmLicense";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function LicensePage() {
  const licenses: NpmLicense[] = data;
  return (
    <AppWrapper>
      <h1 className="text-5xl">라이센스</h1>
      <div className="grid max-w-3xl grid-cols-12 gap-10 mx-auto">
        {licenses.map((l) => (
          <Link
            key={l.link}
            className="flex flex-col space-y-1 col-span-full"
            href={l.link.replace("git+", "").replace("ssh://", "")}
            aria-label={`Open Github repo for ${l.name}`}
          >
            <div className="inline-flex items-center gap-2">
              <div className="space-x-2">
                <span className="text-2xl">{l.name}</span>
                <span className="opacity-50">{l.installedVersion}</span>
              </div>
              <FaExternalLinkAlt />
            </div>
            <div className="text-gray-400">
              {[l.licenseType, l.author].filter(Boolean).join(", ")}
            </div>
          </Link>
        ))}
      </div>
    </AppWrapper>
  );
}
