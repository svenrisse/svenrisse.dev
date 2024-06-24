import * as runtime from "react/jsx-runtime";
import { mdxComponents } from "./Components";
import "katex/dist/katex.min.css";

const useMDXComponent = (code: string) => {
  // eslint-disable-next-line
  const fn = new Function(code); // eslint

  // eslint-disable-next-line
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MDXContentRenderer = ({ code, components }: MDXProps) => {
  // eslint-disable-next-line
  const Component = useMDXComponent(code);
  return <Component components={{ ...mdxComponents, ...components }} />;
};
