import appConfig from "@@/app.config.json";
import { createTree } from "./utils";
import { renderJsxTemplate } from "./renders";
import fs from "fs/promises";

// loads templates for the tree view navigation in the sidebar
// TODO: add correct types
// TODO: remove @ts-ignore
export function loadAllTemplates() {
  const matches = import.meta.glob(["/**/*.(jsx|mjml)"], {});
  const templatesForTree = Object.keys(matches)
    // @ts-ignore
    .filter((match) => match.startsWith(`/${appConfig.input}`))
    .filter((match) => !match.includes("/_"));

  const templatesTree = createTree(templatesForTree);
  return templatesTree;
}

export async function loadTemplate(path: string, ext = "jsx", locale = "") {
  const file = await import(/*@vite-ignore*/ `/${path}.${ext}`);
  const { config } = file;
  let locales: string[] = Object.keys(config?.locales ?? []);
  console.log({ fn: locales });
  if (locales.length && !locale) {
    locale = locales[0];
  }
  console.log({ locale });
  let template = "";
  if (ext === "jsx") {
    template = await renderJsxTemplate(file?.default(locale));
  }
  return { locales, config, template, activeLocale: locale };
}

export async function loadLocalizedTemplates(
  templatePath: string,
  ext = "jsx",
  locales: string[]
) {
  const templates = [];

  for (const locale of locales) {
    const { template } = await loadTemplate(templatePath, ext, locale);
    templates.push({ locale, template });
  }
  return templates;
}

export async function loadFinalHtml(path: string) {
  try {
    return { html: await fs.readFile(path, "utf-8"), error: false };
  } catch (e) {
    console.log(e);
    return { html: "", error: e };
  }
}
