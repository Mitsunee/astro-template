import { atom, onMount } from "nanostores";

export const $isClient = atom(false);

onMount($isClient, () => {
  $isClient.set(typeof document !== "undefined");
});
