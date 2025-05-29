import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <div className="flex flex-col border-border border-t p-4 items-center">
      <div className="flex items-center gap-2 p-2">
        <h1>Made by nhatminhwork1996@gmail.com</h1>
        <a target="_blank" href="https://github.com/laihuynhnhatminh">
          <SiGithub size={24} />
        </a>
      </div>
      <span className="text-sm text-muted-foregrou">
        © {new Date().getFullYear()} Himemiya Cafe. All rights reserved.
      </span>
    </div>
  );
}
