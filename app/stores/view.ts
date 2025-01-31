import { atom } from "nanostores";

export function viewStore() {
  const $view = atom("desktop");

  function setView(view: "desktop" | "mobile") {
    $view.set(view);
  }

  return { $view, setView };
}

export const useViewStore = viewStore();
