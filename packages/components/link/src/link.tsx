import { forwardRef } from "@monoui-org/system";
import { useDOMRef } from "@monoui-org/react-utils";

import type { HTMLAttributeAnchorTarget } from "react";

export type LinkProps = {
  /** A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href). */
  href?: string;
  /** The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target). */
  target?: HTMLAttributeAnchorTarget;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
};

export const Link = forwardRef<"a", LinkProps>(
  ({ as, children, ...props }, ref) => {
    const Component = as || "a";

    const domRef = useDOMRef(ref);

    return (
      <Component ref={domRef} {...props}>
        {children}
      </Component>
    );
  },
);

Link.displayName = "Link";

export default Link;
