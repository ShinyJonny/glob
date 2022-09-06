import React from "react";
import Link from "next/link";
import styles from "../styles/Icon.module.css";

interface Props {
  src: string;
  className?: string;
  style?: Object;
}

const Icon: React.FC<Props> = ({ src, className, style }) => {
  const s = style ?? {};

  return (
    <span className={`${styles.container} ${className ?? ""}`} style={s}>
      <InnerIcon src={src} />
    </span>
  );
};

export default Icon;

interface InnerIconProps {
  src: string;
}

const InnerIcon: React.FC<InnerIconProps> = ({ src }) => (
  <span
    style={{
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
    }}
    className={styles.icon}
  ></span>
);

interface LinkIconProps {
  href: string;
  src: string;
  className?: string;
  external?: boolean;
  circular?: boolean;
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  href,
  src,
  className,
  external,
  circular,
}) => {
  const cn = `${styles.container} ${styles.link} ${
    circular ? styles.circularLink : ""
  } ${className ?? ""}`;

  return external ? (
    <a href={href} className={cn}>
      <InnerIcon src={src} />
    </a>
  ) : (
    <Link href={href}>
      <a className={cn}>
        <InnerIcon src={src} />
      </a>
    </Link>
  );
};
