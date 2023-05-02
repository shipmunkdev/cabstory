'use client';
import MuiToggleButton from '@mui/material/ToggleButton';

import type { ToggleButtonProps } from '@mui/material/ToggleButton';

const ToggleButton = ({ ...rest }: ToggleButtonProps) => (
  <MuiToggleButton {...rest} />
);

export default ToggleButton;
