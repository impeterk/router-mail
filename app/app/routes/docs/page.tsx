import { marked } from "marked";
import fs from "fs/promises";

export async function loader() {
  const raw = await fs.readFile("./app/routes/docs/about.md", "utf-8");
  const markdown = marked(raw);
  return markdown;
}

export default function DocsPage({ loaderData }: { loaderData: string }) {
  return (
    <article
      className="prose max-w-4xl mx-auto"
      dangerouslySetInnerHTML={{ __html: loaderData }}
    ></article>
  );
}
