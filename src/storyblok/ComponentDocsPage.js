import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer';
import { useStoryblok } from '@storyblok/react';
import {
  Title,
  Subtitle,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import resolvers from './resolvers';

export const ComponentDocsPage = ({ id }) => {
  const story = useStoryblok(id, { version: 'draft' });

  return story?.content ? (
    <div>
      {story?.content?.title && <Title>{story.content.title}</Title>}
      {story?.content?.subtitle && (
        <Subtitle>{story.content.subtitle}</Subtitle>
      )}
      {render(story?.content?.body, resolvers)}
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      <Stories />
    </div>
  ) : null;
};
