import Delete from '@mui/icons-material/Delete';
import Send from '@mui/icons-material/Send';

import Button from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Base Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Emoji: Story = {
  args: {
    ...meta.args,
    children: '😄👍😍💯',
  },
};

export const ContainedButton: Story = {
  args: {
    ...meta.args,
    children: 'Contained',
    variant: 'contained',
  },
};

export const StartIcon: Story = {
  args: {
    ...meta.args,
    children: 'Delete',
    startIcon: <Delete />,
    variant: 'contained',
  },
};

export const EndIcon: Story = {
  args: {
    ...meta.args,
    children: 'Send',
    endIcon: <Send />,
    variant: 'contained',
  },
};
