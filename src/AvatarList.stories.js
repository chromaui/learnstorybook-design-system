import React from 'react';

import { AvatarList } from './AvatarList';

export default {
    title: 'Design System/AvatarList',
  };
  
  const Template = (args) => <AvatarList {...args} />;
  
  export const Short = Template.bind({});
  Short.args = {
    users: [
      {
        id: '1',
        name: 'Dominic Nguyen',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
      },
      {
        id: '2',
        name: 'Tom Coleman',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
      },
    ],
  };