import { createTheme } from '@mui/material';

import colors from './base/colors';
import colorsDark from './base/colors-dark';

const lighMode = createTheme({
  palette: { ...colors },
});

const darkMode = createTheme({
  palette: { ...colorsDark },
});

export { lighMode, darkMode };
