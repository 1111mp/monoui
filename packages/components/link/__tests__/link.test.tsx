import { render } from "@testing-library/react";

import { Link } from "../src";

describe("Link", () => {
  it("should render correctly", () => {
    const wrapper = render(<Link />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
