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
