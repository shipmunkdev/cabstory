import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton';

export interface IconButtonStoryProps extends MuiIconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children, ...rest }: IconButtonStoryProps) => (
  <MuiIconButton {...rest}>{children}</MuiIconButton>
);

export default IconButton;
