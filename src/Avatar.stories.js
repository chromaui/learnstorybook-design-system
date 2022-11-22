import { Avatar } from './Avatar';
import { ComponentDocsPage } from './storyblok/ComponentDocsPage';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  argTypes: {
    loading: {
      control: 'boolean',
      description:
        'Use the loading state to indicate that the data Avatar needs is still loading.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    username: {
      description:
        'Avatar falls back to the user’s initial when no image is provided. Supply a `username` and omit `src` to see what this looks like.',
      table: {
        defaultValue: {
          summary: 'loading',
        },
      },
    },
    src: {
      description: "The URL of the Avatar's image.",
      table: {
        defaultValue: {
          summary: null,
        },
      },
    },
    size: {
      description:
        'Avatar comes in four sizes. In most cases, you’ll be fine with `medium`.',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
  },
  parameters: {
    docs: {
      page: () => <ComponentDocsPage id="design-system-avatar" />,
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
};

export const Sizes = () => (
  <div>
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="medium"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="small"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="tiny"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

export const Initials = () => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);

export const Loading = () => (
  <div>
    <Avatar size="large" loading />
    <Avatar size="medium" loading />
    <Avatar size="small" loading />
    <Avatar size="tiny" loading />
  </div>
);
