import { useStore } from "@nanostores/react";
import { atom } from "nanostores";

const TemplatesStore = () => {
  const $currentTemplate = atom<string | undefined>(undefined);
  async function setCurrTempl(template: Promise<string | undefined>) {
    const newTempl = await template;
    $currentTemplate.set(newTempl);
  }

  return {
    get currTempl() {
      return useStore($currentTemplate);
    },
    setCurrTempl,
    $currentTemplate,
  };
};

export const useTemplatesStore = TemplatesStore();
