import React from "react";
import styles from "../styles/Page.module.css";
import { LeftHexEnd, RightHexEnd } from "./svg-icon";
import type { SvgProps } from "./svg-icon";

export enum PageSize {
  Large,
  Medium,
}

interface Props extends React.PropsWithChildren {
  title: string;
  size: PageSize;
}

const Page: React.FC<Props> = ({ title, size, children }) => {
  let sizeClassName: string;

  if (size == PageSize.Large) {
    sizeClassName = "";
  } else if (size == PageSize.Medium) {
    sizeClassName = styles.pageMedium;
  } else {
    console.error(`invalid page size: ${size}`);
    return <></>;
  }

  return (
    <main className={`${styles.page} ${sizeClassName}`}>
      <PageHeader title={title} />
      {children}
    </main>
  );
};

export default Page;

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => (
  <div className={styles.pageHeaderWrapper}>
    <div className={styles.pageHeaderContainer}>
      <HeaderEnd side={EndSide.Left} />
      <Header title={title} />
      <HeaderEnd side={EndSide.Right} />
    </div>
  </div>
);

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <div className={styles.pageHeader}>
    <h1 className={styles.pageHeaderText}>{title}</h1>
  </div>
);

interface HeaderEndProps {
  side: EndSide;
}

const HeaderEnd: React.FC<HeaderEndProps> = ({ side }) => {
  let Svg: React.FC<SvgProps>;
  let sideClassName: string;

  if (side == EndSide.Left) {
    Svg = LeftHexEnd;
    sideClassName = styles.endLeft;
  } else if (side == EndSide.Right) {
    Svg = RightHexEnd;
    sideClassName = styles.endRight;
  } else {
    console.error(`invalid end side: ${side}`);
    return <></>;
  }
  return (
    <div className={styles.endContainer}>
      <Svg className={`${styles.end} ${styles.endBack} ${sideClassName}`} />
      <Svg className={`${styles.end} ${styles.endFront} ${sideClassName}`} />
    </div>
  );
};

enum EndSide {
  Left,
  Right,
}

interface SectionProps extends React.PropsWithChildren {
  first?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, first }) => (
  <section className={`${styles.section} ${first ? styles.firstSection : ""}`}>
    {children}
  </section>
);

export const Heading: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className={styles.heading}>{children}</h2>
);
