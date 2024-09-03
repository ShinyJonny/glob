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

type LinkIconDecoration = "none" | "circular";

interface LinkIconProps {
  href: string;
  src: string;
  className?: string;
  external?: boolean;
  decoration: LinkIconDecoration;
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  href,
  src,
  className,
  external,
  decoration,
}) => {

  let decorationClass: string;
  switch (decoration) {
    case "none":
      decorationClass = "";
      break;
    case "circular":
      decorationClass = styles.circularLink;
      break;
    default:
      const _exhaustiveCheck: never = decoration;
      decorationClass = "";
  };

  const cn = `${styles.container} ${styles.link} ${decorationClass} ${
    className ?? ""}`;

  return external ? (
    <a href={href} className={cn}>
      <InnerIcon src={src} />
    </a>
  ) : (
    <Link className={cn} href={href}>
      <InnerIcon src={src} />
    </Link>
  );
};
