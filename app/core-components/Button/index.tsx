'use client';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import IconButton from './IconButton';

// Only include variant, size, and color
// type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

const Button = ({ children, ...rest }: MuiButtonProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
);

export default Button;
export { IconButton };
