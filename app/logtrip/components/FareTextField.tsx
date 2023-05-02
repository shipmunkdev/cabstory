import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import type { TextFieldProps } from '@mui/material/TextField';

const FareTextField = ({
  id,
  type,
  label,
  onChange,
  ...rest
}: TextFieldProps) => (
  <>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <TextField
      id={id}
      name={id}
      type={type}
      onChange={onChange}
      sx={{ textAlign: 'right' }}
      InputProps={{
        inputProps: {
          pattern: '^[\\\\d]+$',
        },
      }}
      {...rest}
    />
  </>
);

export default FareTextField;
