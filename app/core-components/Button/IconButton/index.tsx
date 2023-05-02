import MuiIconButton from '@mui/material/IconButton';

import type { IconButtonProps } from '@mui/material/IconButton';

const IconButton = ({ children, ...rest }: IconButtonProps) => (
  <MuiIconButton {...rest}>{children}</MuiIconButton>
);

export default IconButton;
