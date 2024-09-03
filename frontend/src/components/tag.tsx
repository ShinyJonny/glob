import React from "react";
import styles from "../styles/Tag.module.css";

interface Props {
  tagType: string;
}

const Tag: React.FC<Props> = ({ tagType }) => {
  let typeClassName: string;
  let text: string;

  if (tagType == "wip") {
    typeClassName = styles.wipTag;
    text = "WIP";
  } else if (tagType == "c") {
    typeClassName = styles.cTag;
    text = "C";
  } else if (tagType == "rust") {
    typeClassName = styles.rustTag;
    text = "Rust";
  } else if (tagType == "web") {
    typeClassName = styles.webTag;
    text = "WEB";
  } else if (tagType == "ts") {
    typeClassName = styles.tsTag;
    text = "TS";
  } else {
    console.error(`unknown Tag type: ${tagType}`);
    return <></>;
  }

  return <span className={`${styles.tag} ${typeClassName}`}>{text}</span>;
};

export default Tag;

interface TagGroupProps {
  tags: Array<string>;
}

export const TagGroup: React.FC<TagGroupProps> = ({ tags }) => (
  <div className={styles.tagGroup}>
    {tags.map((t) => (
      <Tag key={t} tagType={t} />
    ))}
  </div>
);

export const ProfileTag: React.FC<Props> = ({ tagType }) => {
  let text: string;

  if (tagType == "wip") {
    text = "WIP";
  } else if (tagType == "c") {
    text = "C";
  } else if (tagType == "rust") {
    text = "RS";
  } else if (tagType == "web") {
    text = "WEB";
  } else if (tagType == "ts") {
    text = "TS";
  } else {
    console.error(`unknown Tag type: ${tagType}`);
    return <></>;
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    }} className={styles.profileTagGenCont}>
      <span className={`${styles.profileTag} ${styles.plainTag}`}>{text}</span>
    </div>
  );
};
