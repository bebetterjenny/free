export type Children = any; // TODO

export type CSS = Partial<CSSStyleDeclaration> & {
  [key: string]: Partial<CSSStyleDeclaration> | string;
};

export interface InputProps {
  className?: string;
  class?: string; // Fallback className
  classList?: string; // Fallback class
  children?: Children;
}

export interface InputState {
  loaded?: boolean;
}
