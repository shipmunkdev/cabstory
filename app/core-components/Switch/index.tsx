'use client';
import MuiSwitch from '@mui/material/Switch';

import type { SwitchProps } from '@mui/material/Switch';

const Switch = ({ ...rest }: SwitchProps) => <MuiSwitch {...rest} />;

export default Switch;
