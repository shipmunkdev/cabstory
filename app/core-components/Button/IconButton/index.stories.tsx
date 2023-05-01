import Settings from '@mui/icons-material/Settings';

import IconButton from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const SettingsIcon: Story = {
  args: {
    ...meta.args,
    children: <Settings />,
  },
};
