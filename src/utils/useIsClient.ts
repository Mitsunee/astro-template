import { useStore } from "@nanostores/preact";
import { $isClient } from "~/stores/isClient";

export function useIsClient() {
  return useStore($isClient);
}
