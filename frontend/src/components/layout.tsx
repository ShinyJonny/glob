import React from "react";
import Overlay from "./overlay";

// TODO: extract all the `var(...)` and more complex specific styles into tw
// utilities.

interface Props extends React.PropsWithChildren {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[1500px] p-[var(--layout-gap-size)] mx-auto">
      <div>
        <Overlay />
        <div className="mx-auto md:px-[clamp(0px,4vw,calc(var(--layout-gap-size)_*_1.8))] 2xl:px-[clamp(0px,7.5vw,calc(var(--layout-gap-size)_*_1.8))]">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

const Footer = () => {
  const bg = "bg-[linear-gradient(var(--panel-gradient-deg),var(--bg-lighter-color),var(--bg-medium-color))]"
  const linkStyle = "underline font-semibold"

  return (
    <div className={`flex flex-col items-center ${bg} text-[var(--fg-dim-color)]  p-[2.2em] mt-[var(--layout-gap-size)]`}>
      <span>
        Powered by{" "}
        <a href="https://nextjs.org/" className={ /* TODO: remove link class */`link ${linkStyle}`}>
          Next.JS
        </a>
      </span>
      <span> © Copyright 2022-2024 ShinyJonny</span>
    </div>
  )
};
