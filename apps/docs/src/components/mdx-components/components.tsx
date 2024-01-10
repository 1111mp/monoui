import NextImage from "next/image";

export const components = {
  NextImage,

  h1: (props: React.HTMLAttributes<HTMLHeadElement>) => (
    <h1 className="text-red-600" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadElement>) => (
    <h2 className="text-green-400" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadElement>) => <h3 {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadElement>) => <h4 {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step [&>h4]:step border-default-100 relative mb-12 ml-4 border-l pl-[1.625rem] [counter-reset:step] [&>h3>a]:pt-0.5 [&>h4>a]:pt-0.5"
      {...props}
    />
  ),
};
