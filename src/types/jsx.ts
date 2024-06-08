import type { Class } from "classcat";
import type { ComponentChild, ComponentChildren, ComponentProps } from "preact";
import type { JSX } from "preact/jsx-runtime";

type HTMLTag = keyof JSX.IntrinsicElements;
type RequiredChild = Exclude<ComponentChild, null | undefined | false>;
export type CC = { className?: Class };
export type RequiredChildren = RequiredChild | RequiredChild[];
export type HTMLProps<T extends HTMLTag> = ComponentProps<T>;
export type HTMLPropsCC<T extends HTMLTag> = CC &
  Omit<HTMLProps<T>, "className">;
export type HTMLRef<T extends HTMLTag> =
  JSX.IntrinsicElements[T] extends JSX.HTMLAttributes<infer R> ? R : never;
export type WithChildren = { children?: ComponentChildren };
