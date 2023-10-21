import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/page";
import ProjectGrid from "../components/project-grid";
import { siteName } from "../config";
import type { ProjectData } from "../lib";
import { getAllProjects } from "../lib";
import { PageSize } from "../components/page";

interface Props {
  projects: Array<ProjectData>;
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
  return {
    props: { projects: await getAllProjects() },
  };
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>{`${siteName} - Projects`}</title>
      </Head>
      <Page title="Projects" size={PageSize.Large}>
        <ProjectGrid projects={projects} />
      </Page>
    </Layout>
  );
};

export default Projects;
