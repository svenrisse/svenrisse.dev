import { cn } from "~/lib/utils";

export const CodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <div className="relative mb-4 mt-6 rounded-lg font-mono text-sm">
      <pre
        className={cn("overflow-x-auto rounded-b-lg bg-black py-4", className)}
        {...props}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
};
