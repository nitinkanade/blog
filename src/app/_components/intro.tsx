import { CMS_NAME } from "@/lib/constants";
import Link from 'next/link';

export function Intro() {
  const cmsName = CMS_NAME || 'your CMS of choice';

  const menuItems = [
    { href: "/blog/about", label: "About" },
    { href: "/blog/contact", label: "Contact" },
  ];

  return (
    <header className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <nav className="mt-5 md:mt-0 md:pl-8">
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} legacyBehavior>
                <a className="underline hover:text-blue-600 duration-200 transition-colors"> {/* <a> tag is now *inside* the <Link> */}
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}