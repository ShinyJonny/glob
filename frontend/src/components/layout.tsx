import React from "react";
import styles from "../styles/Layout.module.css";
import Overlay from "./overlay";

interface Props extends React.PropsWithChildren {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Overlay />
        <div className={styles.pageContent}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

const Footer: React.FC = () => (
  <div className={styles.footer}>
    <span>
      Powered by{" "}
      <a href="https://nextjs.org/" className={"link"}>
        Next.JS
      </a>
    </span>
    <span> © Copyright 2022 ShinyJonny</span>
  </div>
);
