import Link from "next/link";

const HEADER_MENU = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Button Example",
    href: "/button-example",
  },
  {
    label: "Accordion Example",
    href: "/accordion-example",
  },
];

export default function Header() {
  return (
    <div className="flex gap-4 border-border border-b p-4">
      {HEADER_MENU.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
