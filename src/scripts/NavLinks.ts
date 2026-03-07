const NavLinks: navLinksProps[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export interface navLinksProps {
  name: string;
  href: string;
}

export { NavLinks };
