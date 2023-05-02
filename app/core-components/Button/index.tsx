'use client';
import MuiButton from '@mui/material/Button';

import IconButton from './IconButton';

import type { ButtonProps } from '@mui/material/Button';

// Only include variant, size, and color
// type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

const Button = ({ children, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
);

export default Button;
export { IconButton };
