import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import ToggleButton from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleButton> = {
  title: 'ToggleButton',
  component: ToggleButton,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Base: Story = {
  args: {
    ...meta.args,
    children: 'Base Toggle Button',
  },
};

export const VerticalToggleButton = () => {
  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      aria-label="Platform"
      orientation="vertical"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
};
