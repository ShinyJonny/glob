import React from "react";
import Link from "next/link";
import styles from "../styles/BackButton.module.css";
import { ArrowLeft } from "./svg-icon";

interface BackButtonProps {
  href: string;
  destination: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, destination }) => (
  <Link className={styles.link} href={href}>
    <ArrowLeft className={styles.icon} />
    <span className={styles.text}>Back to {destination}</span>
  </Link>
);

export default BackButton;
