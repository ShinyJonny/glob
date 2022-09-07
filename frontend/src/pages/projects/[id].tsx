import React from "react";
import type { NextPage, GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/future/image";
import styles from "../../styles/Project.module.css";
import Layout from "../../components/layout";
import Page, { PageSize, Section, Heading } from "../../components/page";
import { TagGroup } from "../../components/tag";
import Icon from "../../components/icon";
import BackButton from "../../components/back-button";
import { siteName } from "../../config";
import { getProjectIds, getProject } from "../../lib";
import type { ProjectData } from "../../lib";

export async function getStaticPaths() {
  const ids = await getProjectIds();

  return {
    paths: ids.map((id) => {
      return {
        params: {
          id,
        },
      };
    }),
    fallback: false,
  };
}

interface Props {
  project: ProjectData;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<{ props: Props }> {
  if (!context.params) {
    throw "Did not get any params";
  }

  const projectId = context.params.id;
  if (typeof projectId !== "string") {
    throw `invalid type of id: ${typeof projectId}`;
  }

  const project = await getProject(projectId);
  if (!project) {
    throw `Couldn't get project with ID: ${projectId}`;
  }

  return {
    props: { project },
  };
}

const Projects: NextPage<Props> = ({ project }) => {
  return (
    <Layout>
      <Head>
        <title>{`${siteName} - ${project.metadata.name}`}</title>
      </Head>
      <Page title={project.metadata.name} size={PageSize.Medium}>
        <ProjectProfile
          src={project.metadata.profileImage || "/project-profile.svg"}
        />

        <Section>
          <TagGroup tags={project.metadata.tags || []} />
        </Section>
        <Section>
          <Heading>Description</Heading>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: project.body }}
          />
        </Section>
        <Section>
          <Heading>Links</Heading>
          <LinkList>
            <LinkLine
              href={project.metadata.repo}
              iconSrc={"/code.svg"}
              text={"Source Code"}
            />
          </LinkList>
        </Section>
        <VSpacer />
        <BackButton href="/projects" destination="Projects" />
      </Page>
    </Layout>
  );
};

export default Projects;

interface ProjectProfileProps {
  src: string;
}

const ProjectProfile: React.FC<ProjectProfileProps> = ({ src }) => (
  <div className={styles.profileWrapper}>
    <Image
      src={src}
      alt="Project profile image"
      width={250}
      height={250}
      className={styles.profile}
    />
  </div>
);

const LinkList: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ul className={styles.linkList}>{children}</ul>
);

interface LinkLineProps {
  href: string;
  iconSrc: string;
  text: string;
}

const LinkLine: React.FC<LinkLineProps> = ({ href, iconSrc, text }) => (
  <li>
    <a href={href} className={`link ${styles.linkLine}`}>
      <Icon src={iconSrc} className={styles.linkIcon} />
      <span>{text}</span>
    </a>
  </li>
);

const VSpacer: React.FC = () => (
  <div style={{ width: "100%", height: "var(--page-padding)" }} />
);
