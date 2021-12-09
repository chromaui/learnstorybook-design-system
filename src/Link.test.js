import { render } from "@testing-library/react";
import { Link } from "./Link";

test("has a href attribute when rendering with linkWrapper", () => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  const LinkWrapper = (props) => <a {...props} />;
  const { container } = render(
    <Link href="https://storybook.js.org/tutorials/" LinkWrapper={LinkWrapper}>
      Link Text
    </Link>
  );

  const linkElement = container.querySelector(
    'a[href="https://storybook.js.org/tutorials/"]'
  );
  expect(linkElement).not.toBeNull();
  expect(linkElement.textContent).toEqual("Link Text");
});
