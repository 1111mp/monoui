import { render } from "@testing-library/react";

import { Button } from "../src";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = render(<Button label="button" />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
