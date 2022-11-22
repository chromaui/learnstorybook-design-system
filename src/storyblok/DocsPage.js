import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
import { useStoryblok } from '@storyblok/react';
import resolvers from './resolvers';

export const DocsPage = ({ id = 'intro' }) => {
  const story = useStoryblok(id, { version: 'draft' });

  return story?.content ? (
    <div>{render(story?.content?.body, resolvers)}</div>
  ) : null;
};
