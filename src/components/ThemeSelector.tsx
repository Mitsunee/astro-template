import { useStore } from "@nanostores/preact";
import cc from "classcat";
import { $theme } from "~/stores/theme";
import styles from "./ThemeSelector.module.css";

export function ThemeSelector() {
  const currentTheme = useStore($theme);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={cc([currentTheme == "light" && styles.active])}
        aria-label="Choose Light Theme"
        onClick={() => $theme.set("light")}>
        Light
      </button>
      <button
        type="button"
        className={cc([currentTheme === null && styles.active])}
        aria-label="Choose System Theme"
        onClick={() => $theme.set(null)}>
        System
      </button>
      <button
        type="button"
        className={cc([currentTheme == "dark" && styles.active])}
        aria-label="Choose Dark Theme"
        onClick={() => $theme.set("dark")}>
        Dark
      </button>
    </div>
  );
}
