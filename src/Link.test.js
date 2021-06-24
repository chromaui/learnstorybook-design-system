import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from './Link';

/**
 * A straightforward link wrapper that renders an <a> with the passed props.
 * What we are testing here is that the Link component passes the right props to the wrapper and itself.
 */
const LinkWrapper = props => <a {...props} />; // eslint-disable-line jsx-a11y/anchor-has-content

it('has a href attribute when rendering with linkWrapper', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Link href="https://storybook.js.org/tutorials/" LinkWrapper={LinkWrapper}>
      Link Text
    </Link>,
    div
  );

  expect(div.querySelector('a[href="https://storybook.js.org/tutorials/"]')).not.toBeNull();
  expect(div.textContent).toEqual('Link Text');

  ReactDOM.unmountComponentAtNode(div);
});