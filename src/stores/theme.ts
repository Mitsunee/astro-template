import { atom } from "nanostores";
import { getLocalStorage } from "~/utils/getLocalStorage";

type ThemeValue = null | "light" | "dark";
const localStorage = getLocalStorage();

function setDocumentTheme(value: ThemeValue) {
  const document = window?.document.documentElement;
  if (!document) return;
  if (value) {
    localStorage?.setItem("theme", value);
    document.dataset.theme = value;
  } else {
    localStorage?.removeItem("theme");
    delete document.dataset.theme;
  }
}

function normalizeThemeValue(value?: string | null): ThemeValue {
  if (!value || (value != "light" && value != "dark")) return null;
  return value;
}

function getStoredTheme(): ThemeValue {
  return normalizeThemeValue(localStorage?.getItem("theme"));
}

export const $theme = atom<ThemeValue>(getStoredTheme());
$theme.subscribe(value => setDocumentTheme(value));
window.addEventListener("storage", ev => {
  if (ev.key != "theme") return;
  $theme.set(normalizeThemeValue(ev.newValue));
});
