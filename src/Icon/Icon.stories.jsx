import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from './Icon';
import { icons } from '../shared/icons';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export default {
  title: 'Design System/Icon',
  component: Icon,
};

export const Labels = {
  render: () => (
    <>
      There are {Object.keys(icons).length} icons
      <List>
        {Object.keys(icons).map((key) => (
          <Item key={key}>
            <Icon icon={key} aria-hidden />
            <Meta>{key}</Meta>
          </Item>
        ))}
      </List>
    </>
  ),
};

export const NoLabels = {
  name: 'no labels',
  render: () => (
    <List>
      {Object.keys(icons).map((key) => (
        <Item minimal key={key}>
          <Icon icon={key} aria-label={key} />
        </Item>
      ))}
    </List>
  ),
};

export const Inline = {
  render: (args) => (
    <>
      this is an inline <Icon {...args} /> icon (default)
    </>
  ),
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face',
  },
};

export const Block = {
  render: (args) => (
    <>
      this is a block <Icon {...args} /> icon
    </>
  ),
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face',
    block: true,
  },
};
