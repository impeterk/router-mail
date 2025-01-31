import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import config from "@@/app.config.json";
import type { Node } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createTree(paths: string[]): Node {
  const tree = { name: null, nodes: [] }; // Top-level nodes
  paths.forEach((path) => {
    // @ts-ignore
    const parts = path.replace(`/${config.input}`, "").split("/");
    let currentLevel = tree;

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1;

      // Find the existing node or create a new one
      // @ts-ignore
      let node = currentLevel.nodes.find((node) => node.name === part);
      if (!node) {
        // @ts-ignore
        node = isFile
          ? {
              name: part?.replace(/\.\w+$/, ""),
              link: `${path.split(".")[0]}?ext=${path.split(".")[1]}`,
            } // File node
          : { name: part, nodes: [], level: index }; // Folder node
        // @ts-ignore
        currentLevel.nodes.push(node);
      }

      // Move deeper into the tree if it's a folder
      if (!isFile) {
        // @ts-ignore
        currentLevel = node;
      }
    });
  });
  // @ts-ignore

  return tree;
}
