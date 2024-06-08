import type { ImageMetadata } from "astro";

export interface PageMeta {
  title: string;
  description: string;
  image?: ImageMetadata;
  noRobots?: boolean;
  imageLarge?: boolean;
}
