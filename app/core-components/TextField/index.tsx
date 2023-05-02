'use client';
import MuiTextField from '@mui/material/TextField';

import type { TextFieldProps } from '@mui/material/TextField';

const TextField = ({ ...rest }: TextFieldProps) => <MuiTextField {...rest} />;

export default TextField;
