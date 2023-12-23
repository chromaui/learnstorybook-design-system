import { Avatar } from './Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  /*
   * More on Storybook argTypes at:
   * https://storybook.js.org/docs/react/api/argtypes
   */
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['tiny', 'small', 'medium', 'large'],
    },
  },
};

export const Standard = {
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
};

/**
 * 4 sizes are supported.
 */
export const Sizes = {
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
  render: (args) => (
    <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
  ),
};

/**
 * Shows the user's initials as a fallback when no image is provided.
 */
export const Initials = {
  render: (args) => (
    <>
      <Avatar username='Tom Coleman' />
      <Avatar username='Dominic Nguyen' />
      <Avatar username='Varun Vachhar' />
      <Avatar username='Michael Shilman' />
    </>
  ),
};

/**
 * Shows a loading indicator.
 */
export const Loading = {
  args: {
    loading: true,
  },
  render: (args) => (
    <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
  ),
};

/**
 * Shows the user's avatar when provided with a `src` prop or in various states and sizes.
 */
export const Large = {
  render: () => (
    <>
      <Avatar loading size='large' />
      <Avatar size='large' username='Tom Coleman' />
      <Avatar
        size='large'
        username='Tom Coleman'
        src='https://avatars2.githubusercontent.com/u/132554'
      />
    </>
  ),
};

/**
 * Avatar component using Controls
 */
export const Controls = {
  args: {
    loading: false,
    size: 'tiny',
    username: 'Dominic Nguyen',
    src: 'https://avatars.githubusercontent.com/u/263385',
  },
};
