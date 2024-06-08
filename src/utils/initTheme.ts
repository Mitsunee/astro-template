import { getLocalStorage } from "./getLocalStorage";

const localStorage = getLocalStorage();

function normalizeThemeValue(value?: string | null) {
  if (!value || (value != "light" && value != "dark")) return null;
  return value;
}

function getStoredTheme() {
  return normalizeThemeValue(localStorage?.getItem("theme"));
}

export function initTheme() {
  if (!localStorage || typeof document === "undefined") return;
  const theme = getStoredTheme();
  if (theme == "dark" || theme == "light") {
    document.documentElement.dataset.theme = theme;
  }
}
