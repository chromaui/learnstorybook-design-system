import React from 'react';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { GlobalStyle } from '../src/shared/global';

storyblokInit({
  accessToken: 'HdTnwtdHQQyRQLd1090IxAtt',
  apiOptions: {
    region: 'us', // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
});

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
