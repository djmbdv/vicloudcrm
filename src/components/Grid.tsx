import type { HTMLProps } from "react";

export type RenderFucntion<T> = (elemment: T) => JSX.Element;
export interface GridProps<T> extends HTMLProps<HTMLDivElement> {
  elements: T[];
  render: RenderFucntion<T>;
}

const Grid = <T,>({
  elements,
  render,
  ...props
}: GridProps<T>): JSX.Element => (
  <div className="grid border-collapse rounded-sm grid-cols-4 gap-4" {...props}>
    {elements.map((e) => render(e))}
  </div>
);

export default Grid;
