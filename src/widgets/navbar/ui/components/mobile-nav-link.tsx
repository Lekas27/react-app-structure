import type { FC, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const MobileNavLink: FC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block px-4 py-3 font-medium rounded-lg hover:bg-white/10 hover:text-lime-400 transition-all duration-300 hover:pl-6 text-white!"
    >
      {children}
    </a>
  );
};
