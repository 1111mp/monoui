import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "./components";

import type { MDXComponents } from "mdx/types";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components as unknown as MDXComponents} />;
}
