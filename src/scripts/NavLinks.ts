const NavLinks: navLinksProps[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export interface navLinksProps {
  name: string;
  href: string;
}

export { NavLinks };
