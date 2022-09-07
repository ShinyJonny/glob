import { readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const DATA_DIR = "./data";

export interface ProjectData {
  id: string;
  metadata: {
    name: string;
    description: string;
    repo: string;
    profileImage?: string;
    tags?: Array<string>;
  };
  body: string;
}

export async function getProjectIds(): Promise<Array<string>> {
  const filePath = path.join(DATA_DIR, "projects.json");
  const data = await readFile(filePath, "utf8");

  return JSON.parse(data);
}

export async function getAllProjects(): Promise<Array<ProjectData>> {
  const ids = await getProjectIds();

  const projects = await Promise.all(ids.map(async (id) => getProject(id)));

  return projects;
}

export async function getProject(id: string): Promise<ProjectData> {
  const filePath = path.join(DATA_DIR, "projects", `${id}.md`);
  const fileData = await readFile(filePath);

  const matterOutput = matter(fileData);

  const metadata = {
    name: matterOutput.data.name,
    description: matterOutput.data.description,
    repo: matterOutput.data.repo,
    profileImage: matterOutput.data.profileImage || null,
    tags: matterOutput.data.tags || null,
  };
  const remarkOutput = await remark().use(html).process(matterOutput.content);
  const body = remarkOutput.toString();

  return { id, metadata, body };
}
