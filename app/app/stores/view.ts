import { atom } from "nanostores";
import { useStore } from "@nanostores/react";

export function viewStore() {
  const $view = atom("desktop");

  function setView(view: "desktop" | "mobile") {
    $view.set(view);
  }

  return {
    get view() {
      return useStore($view);
    },
    setView,
    $view,
  };
}

export const useViewStore = viewStore();
