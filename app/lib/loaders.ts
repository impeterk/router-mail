import config from "@@/app.config.json";
import { createTree } from "./utils";
import { renderJsxTemplate } from "./renders";

// loads templates for the tree view navigation in the sidebar
// TODO: add correct types
// TODO: remove @ts-ignore
export function loadAllTemplates() {
  const matches = import.meta.glob(["/**/*.(jsx|mjml)"], {});
  const templatesForTree = Object.keys(matches)
    // @ts-ignore
    .filter((match) => match.startsWith(`/${config.input}`))
    .filter((match) => !match.includes("/_"));

  const templatesTree = createTree(templatesForTree);
  return templatesTree;
}

export async function loadTemplate(path: string, ext = "jsx"): Promise<string> {
  const raw = await import(/*@vite-ignore*/ `/${path}.${ext}`);
  if (ext === "jsx") return renderJsxTemplate(raw?.default());
  return "";
}
