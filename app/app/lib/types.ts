export type Node = {
  name: string;
  link?: string;
  nodes?: Node[];
  level?: number;
};

export type TemplateType = "js" | "mjml" | "react";
