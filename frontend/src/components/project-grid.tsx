import React from "react";
import styles from "../styles/ProjectGrid.module.css";
import type { ProjectData } from "../lib";
import ProjectCard from "./project-card";

interface Props {
  projects: Array<ProjectData>;
}

const ProjectGrid: React.FC<Props> = ({ projects }) => {
  return (
    <ItemGrid>
      {projects.map((p, i) => (
        <ProjectCard
          key={p.metadata.repo}
          id={p.id}
          name={p.metadata.name}
          repo={p.metadata.repo}
          description={p.metadata.description}
          profileImage={p.metadata.profileImage}
          tags={p.metadata.tags || []}
          animationDelay={300 + i * 100}
        />
      ))}
    </ItemGrid>
  );
};

export default ProjectGrid;

const ItemGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.projectGrid}>{children}</div>;
};
