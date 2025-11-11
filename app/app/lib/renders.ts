import { renderToString } from "react-dom/server";
import mjml2html from "mjml";
import type { ReactNode } from "react";
import defaultConfig from "./config.mjml";
export function renderJsxTemplate(rawJsx: ReactNode, config = defaultConfig) {
  return renderHtml(renderToString(rawJsx), defaultConfig);
}

function renderHtml(rawString: string, config: typeof defaultConfig) {
  return mjml2html(rawString, { ...defaultConfig, ...config }).html;
}
