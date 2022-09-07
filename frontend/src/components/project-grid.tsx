import React from "react";
import styles from "../styles/ProjectGrid.module.css";
import type { ProjectData } from "../data";
import ProjectCard from "./project-card";

interface Props {
  projects: Array<ProjectData>;
}

const ProjectGrid: React.FC<Props> = ({ projects }) => {
  return (
    <ItemGrid>
      {projects.map((p, i) => (
        <ProjectCard
          key={p.repo}
          id={p.id}
          name={p.name}
          repo={p.repo}
          description={p.shortDesc}
          profileImage={p.profileImage}
          tags={p.tags ? p.tags : []}
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
