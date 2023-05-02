import Switch from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  args: {
    inputProps: {
      'aria-label': 'Switch demo',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Base: Story = {
  args: {
    ...meta.args,
  },
};

export const MultiColor: Story = {
  args: {
    ...meta.args,
  },
  render: () => {
    return (
      <>
        <Switch {...meta.args} defaultChecked />
        <Switch {...meta.args} defaultChecked color="secondary" />
        <Switch {...meta.args} defaultChecked color="warning" />
        <Switch {...meta.args} defaultChecked color="default" />
      </>
    );
  },
};
