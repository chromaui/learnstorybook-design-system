import { AvatarList } from './AvatarList';

export default {
  title: 'Design System/AvatarList',
  component: AvatarList,
  tags: ['autodocs'],
};

export const Short = {
  args: {
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
  },
};

export const SmallSize = {
  args: {
    ...Short.args,
    size: 'small',
  },
};

export const Loading = {
  args: {
    ...Short.args,
    loading: true,
  },
};


export const Ellipsized = {
  args: {
    users: [
      ...Short.args.users,
      {
        id: '3',
        name: 'Zoltan Olah',
        avatarUrl: 'https://avatars0.githubusercontent.com/u/81672',
      },
      {
        id: '4',
        name: 'Tim Hingston',
        avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
      },
    ],
  },
};

export const BigUserCount = {
  args: {
    users: Ellipsized.args.users,
    userCount: 100,
  },
};

export const Empty = {
  args: {
    users: [],
  },
};
