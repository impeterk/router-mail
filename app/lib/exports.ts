import path from "path";
import fs from "fs/promises";
import appConfig from "@@/app.config.json";
import { renderJsxTemplate } from "./renders";

export async function exportSingleTemplate({
  fileName,
  content,
  customName = appConfig.templateName ?? "",
  locale = "",
}: {
  fileName: string;
  content: string;
  customName?: string;
  locale?: string;
}) {
  const localeName = `${appConfig.templateName ?? "body"}_${locale}`;
  let finalName = locale ? localeName : customName;

  const filePath = path.join(
    process.cwd(),
    appConfig.output,
    fileName.replace(appConfig.input, ""),
    locale,
    finalName
  );
  const file = `${filePath}.html`;
  const targetDir = path.dirname(file);

  try {
    await fs.access(targetDir);
  } catch (e) {
    await fs.mkdir(targetDir, { recursive: true });
  }
  try {
    await fs.writeFile(file, content);
    console.log(`${file} write succesfully`);
    return file;
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

export async function exportLocalizedTemplates({
  fileName,
  templates,
}: {
  fileName: string;
  templates: { locale: string; template: string }[];
}) {
  try {
    // templates.forEach(async (entry) => {
    for (const entry of templates) {
      const name = `${appConfig.templateName ?? "body"}_${entry.locale}`;
      await exportSingleTemplate({
        fileName,
        content: entry.template,
        customName: name,
        locale: entry.locale,
      });
    }
    // });
    return {
      success: true,
      error: false,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      error: true,
    };
  }
}

export async function exportAllTemplates() {
  const jsx = [];
  const react = [];

  const matches = import.meta.glob(["/**/*.jsx"], {
    eager: true,
  });
  for (const match in matches) {
    console.log(match);
    if (match.includes("/_")) {
      continue;
    }
    // if (match.startsWith(`/${config.input}`) && match.includes("react")) {
    //   react.push({ [match]: matches[match] });
    // }
    if (match.startsWith(`/${appConfig.input}`)) {
      jsx.push({ [match]: matches[match] });
    }
  }

  const exportJsxPromise = handleExportJsx(jsx);
  //   const exportReactPromise = handleExportReact(react);
  try {
    await Promise.all([exportJsxPromise]);
  } catch (e) {
    console.log(e);
    return { data: null, error: "Something went wrong" };
  }
  console.log("we were here");
  return { data: "All templates exported", error: null };
}

// helper method
function handleKeyValue(object: any) {
  return {
    fileName: Object.keys(object)[0]
      .replace(`/${appConfig.input}`, "")
      .replace(/\.\w+$/, ""),
    file: Object.values(object)[0],
  };
}

// internal function to render and export templates
async function handleExportJsx(arr: any) {
  return await Promise.all(
    arr.map(async (entry: any) => {
      const { fileName, file } = handleKeyValue(entry);
      //   @ts-expect-error Property 'default' does not exist on type '{}'
      const template = renderJsxTemplate(file?.default());
      await exportSingleTemplate({ fileName, content: template });
    })
  );
}

async function handleExportReact(arr: any) {
  return await Promise.all(
    arr.map(async (entry: any) => {
      const { fileName, file } = handleKeyValue(entry);
      //   @ts-expect-error Property 'default' does not exist on type '{}'
      const template = await renderReactTemplate(file?.default());
      await exportSingleTemplate({
        fileName,
        content: template,
      });
    })
  );
}
