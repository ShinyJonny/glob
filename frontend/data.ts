export interface ProjectData {
  id: string;
  name: string;
  repo: string;
  shortDesc: string;
  description: string;
  profileImage?: string;
  tags?: Array<string>;
}

export const projectDataList: Array<ProjectData> = [
  {
    id: "fsfill",
    name: "Fsfill",
    repo: "https://github.com/ShinyJonny/fsfill",
    shortDesc: "Fill unused space in the file system structure with bytes.",
    description:
      "CLI utility that scans the file system structure and keeps track of the free (uninitialised) space. This space can then be filled with bytes. Essentially, it allows the user to zero-fill the drive even after the file system has been installed. This can be used to achieve plausible deniability on block-encrypted media (e.g. dm-crypt) that has not been filled with random bytes during the initialisation.",
    tags: ["wip", "rust"],
  },
  {
    id: "hexvi",
    name: "HexVI",
    repo: "https://github.com/ShinyJonny/hexvi",
    shortDesc: "Terminal hex editor inspired by vi.",
    description:
      "A very simple terminal hex editor. Key bindings and editing style are inspired by vi. It is planned to expand the editor with support for structure parsing, scripts and more.",
    tags: ["rust"],
  },
  {
    id: "roggame",
    name: "RogGame",
    repo: "https://github.com/ShinyJonny/roggame",
    shortDesc:
      "Terminal adventure game written in rust, using a custom windowing and UI library.",
    description:
      "A work-in-progress adventure game inspired by terminal rogue-likes. It uses a custom windowing and UI library, built on top of termion.",
    tags: ["wip", "rust"],
  },
  {
    id: "advgame",
    name: "AdvGame",
    repo: "https://github.com/ShinyJonny/advgame",
    shortDesc:
      "Simple terminal game with no dependencies, using only print statements.",
    description:
      "A very simple terminal game inspired by NetHack. The game has no dependencies and uses print statements to render graphics. This is the very first proper program that I ever wrote.",
    tags: ["c"],
  },
  {
    id: "glob",
    name: "Glob",
    repo: "https://github.com/ShinyJonny/glob",
    shortDesc: "The source code of this site.",
    description:
      "My personal site and portfolio. It is written in TypeScript, using NextJS in SSG mode. This project is the source code for this site.",
    tags: ["web", "ts"],
  },
];
