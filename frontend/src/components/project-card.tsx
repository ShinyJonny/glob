import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";
import { LinkIcon } from "./icon";
import Tag, { ProfileTag } from "./tag";

interface Props {
  id: string;
  name: string;
  profileImage?: string;
  description: string;
  repo: string;
  tags: Array<string>;
  animationDelay?: number;
}

const ProjectCard: React.FC<Props> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const delay = props.animationDelay || 0;
  const initialAnimDuration = 150;

  useEffect(() => {
    const tim = setTimeout(() => {
      setLoaded(true);
    }, delay + initialAnimDuration);

    return () => clearTimeout(tim);
  }, [delay]);

  let style = !loaded
    ? {
        opacity: "0",
        transform: "rotate(-3deg)",
        animation: `resetOpacityAndTransform ${initialAnimDuration}ms ${delay}ms ease-out forwards`,
      }
    : {};

  return (
    <div className={styles.card} style={style}>
      <CardBody {...props} />
      <Controls repo={props.repo} />
    </div>
  );
};

export default ProjectCard;

const CardBody: React.FC<Props> = ({
  id,
  name,
  description,
  profileImage,
  tags,
}) => {
  let profile: React.ReactElement;
  if (profileImage) {
    profile = <Image
      src={profileImage}
      alt={`Profile image of the project ${name}`}
      width={80}
      height={80}
      className={styles.profileImage}
    />;
  } else if (tags.length == 0) {
    profile = <Image
      src="/project-profile.svg"
      alt={`Profile image of the project ${name}`}
      width={80}
      height={80}
      className={styles.profileImage}
    />;
  } else {
    profile = (
      <div className={styles.profileImage}>
        <ProfileTag tagType={tags[0]} />
      </div>
    );
  }

  return(
    <div className={styles.body}>
      <div className={styles.topLine}>
        <div className={styles.titleLine}>
          {profile} 
          <h2 className={styles.title}>
            <Link className={styles.titleLink} href={`/projects/${id}`}>
              {name}
            </Link>
          </h2>
        </div>
        {tags.map((t) => (
          <Tag key={t} tagType={t} />
        ))}
      </div>
      <span className={styles.description}>{description}</span>
    </div>
  )
};

interface ControlsProps {
  repo: string;
}

const Controls: React.FC<ControlsProps> = ({ repo }) => (
  <div className={styles.controls}>
    <LinkIcon
      href={repo}
      src="/code.svg"
      className={styles.controlIcon}
      decoration="none"
    />
  </div>
);
