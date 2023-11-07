import { Badge } from './Badge';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Design System/Badge',
  component: Badge,
};

export const AllBadges = {
  args: {
    icon: 'facehappy',
    inline: true,
  },
  name: 'all badges',
  render: (args) => (
    <>
      <Badge status='positive'>Positive</Badge>
      <Badge status='negative'>Negative</Badge>
      <Badge status='neutral'>Neutral</Badge>
      <Badge status='error'>Error</Badge>
      <Badge status='warning'>Warning</Badge>
      <Badge status='positive'>
        <Icon {...args} />
        with icon
      </Badge>
    </>
  ),
};

export const Positive = {
  args: {
    status: 'positive',
    children: 'Positive',
  },
};

export const Negative = {
  args: {
    status: 'negative',
    children: 'Negative',
  },
};
export const Warning = {
  args: {
    status: 'warning',
    children: 'Warning',
  },
};

export const Neutral = {
  args: {
    status: 'neutral',
    children: 'Neutral',
  },
};

export const Error = {
  args: {
    status: 'error',
    children: 'Error',
  },
};

export const WithIcon = {
  args: {
    status: 'warning',
    icon: 'check',
    inline: true,
  },
  name: 'with icon',
  render: (args) => (
    <Badge {...args}>
      <Icon {...args} />
      with icon
    </Badge>
  ),
};
