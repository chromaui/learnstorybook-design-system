import React from 'react';
import { Badge } from './Badge';
import { Icon } from './Icon';

export default {
  title: 'Design System/Badge',
  component: Badge,
};

export const allBadges = (args) =>(
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="positive">
      <Icon {...args} />
      with icon
    </Badge>
  </div>
);
allBadges.args={
  icon:'facehappy',
  inline:true
}

allBadges.storyName = "all badges";

export const positive = () => <Badge status="positive">Positive</Badge>;
export const negative = () => <Badge status="negative">Negative</Badge>;
export const warning = () => <Badge status="warning">Warning</Badge>;
export const neutral = () => <Badge status="neutral">Neutral</Badge>;
export const error = () => <Badge status="error">Error</Badge>;

export const withIcon = (args) => (
  <Badge {...args}>
    <Icon {...args}/>
    with icon
  </Badge>
);
withIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
};

withIcon.storyName = "with icon";
