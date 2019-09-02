import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import 'storybook-chromatic';

import { GlobalStyle } from '../src/shared/global';

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
