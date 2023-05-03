import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import React from 'react';

type FareInputProps = {
  fareType: string;
  meterBaseFare: string;
  cashPayment: boolean;
  checkedAirportFee: boolean;
  bridgeFee: string;
  grandTotalFare: string;
  setFareType: (fareType: string) => void;
  setMeterBaseFare: (meterBaseFare: string) => void;
  setCashPayment: (cashPayment: boolean) => void;
  setCheckedAirportFee: (checkedAirportFee: boolean) => void;
  setBridgeFee: (bridgeFee: string) => void;
  setGrandTotalFare: (grandTotalFare: string) => void;
  handleCalculate: () => void;
};

const FareInput = ({
  fareType,
  meterBaseFare,
  cashPayment,
  checkedAirportFee,
  bridgeFee,
  grandTotalFare,
  setFareType,
  setMeterBaseFare,
  setCashPayment,
  setCheckedAirportFee,
  setBridgeFee,
  setGrandTotalFare,
  handleCalculate,
}: FareInputProps) => {
  return (
    <>
      {/* Fare Type Input */}
      <FormControl fullWidth margin="dense">
        <Typography>Fare Type</Typography>
        <ToggleButtonGroup
          value={fareType}
          exclusive
          onChange={(_e, newFareType) => setFareType(newFareType)}
        >
          <ToggleButton value="short">short</ToggleButton>
          <ToggleButton value="regular">regular</ToggleButton>
          <ToggleButton value="long">long</ToggleButton>
        </ToggleButtonGroup>
      </FormControl>
      {/* Meter Base Input */}
      <FormControl fullWidth margin="dense">
        <Typography>Meter Base Fare</Typography>
        <TextField
          id="meter-base-fare"
          type="number"
          value={meterBaseFare}
          onChange={(e) => setMeterBaseFare(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
      </FormControl>
      {/* Bridge Fee Input */}
      <FormControl fullWidth margin="dense">
        <Typography>Bridge Fee</Typography>
        <TextField
          id="bridge-fee"
          type="number"
          value={bridgeFee}
          onChange={(e) => setBridgeFee(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
      </FormControl>
      {/* Grand Total Input */}
      <FormControl fullWidth margin="dense">
        <Typography>Grand Total</Typography>
        <TextField
          id="grand-total-fare"
          type="number"
          value={grandTotalFare}
          onChange={(e) => setGrandTotalFare(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
      </FormControl>
      {/* Cash Payment Switch */}
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={checkedAirportFee}
              onChange={(e) => setCheckedAirportFee(e.target.checked)}
            />
          }
          label="Airport Fee ($5.50)"
        />
        <FormControlLabel
          control={
            <Switch
              checked={cashPayment}
              onChange={(e) => setCashPayment(e.target.checked)}
            />
          }
          label="Cash"
        />
      </FormGroup>

      {/* Buttons */}
      <Grid
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '1rem',
        }}
      >
        <Grid item sx={{ width: '30%' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            sx={{ width: '100%' }}
          >
            Calculate
          </Button>
        </Grid>
        <Grid item sx={{ width: '25%' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            sx={{ width: '100%' }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FareInput;
