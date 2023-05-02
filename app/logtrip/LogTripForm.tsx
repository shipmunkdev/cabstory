'use client';
import { Box, Button, FormControl } from '@mui/material';
import React, { useState } from 'react';

import FareTextField from './components/FareTextField';

export default function LogTripForm() {
  const [meterFare, setMeterFare] = useState('0.00');
  const formatCurrency = (value: string) => {
    return parseFloat(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  const handleMeterFareChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMeterFare(formatCurrency(event.target.value));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
      }}
    >
      <Box sx={{ width: '100%', mb: 2 }}>
        <form>
          <FormControl sx={{ width: '100%', mt: 2 }}>
            <FareTextField
              id="meter-fare"
              label="Meter Fare"
              value={meterFare}
              onChange={handleMeterFareChange}
            />
          </FormControl>

          <FormControl sx={{ width: '100%', mt: 2 }}>
            <FareTextField id="fare-type" label="Fare Type" />
            {/* <RadioGroup
              id="fare-type"
              value={fareType}
              onChange={handleFareTypeChange}
              sx={{ flexDirection: 'row', justifyContent: 'center' }}
            >
              <FormControlLabel
                value="short"
                control={<Radio />}
                label="Short"
              />
              <FormControlLabel
                value="regular"
                control={<Radio />}
                label="Regular"
              />
              <FormControlLabel value="long" control={<Radio />} label="Long" />
            </RadioGroup> */}
          </FormControl>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              mt: 2,
            }}
          >
            {/* Airport and Bridge Fee */}
          </Box>

          {/* Grand Total */}
          <FormControl sx={{ width: '100%', mt: 2 }}></FormControl>

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
