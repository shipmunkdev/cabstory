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
  airportFee: boolean;
  bridgeFee: string;
  grandTotalFare: string;
  setFareType: (fareType: string) => void;
  setMeterBaseFare: (meterBaseFare: string) => void;
  setCashPayment: (cashPayment: boolean) => void;
  setAirportFee: (airportFee: boolean) => void;
  setBridgeFee: (bridgeFee: string) => void;
  setGrandTotalFare: (grandTotalFare: string) => void;
  handleCalculate: () => void;
};

const FareInput = ({
  fareType,
  meterBaseFare,
  cashPayment,
  airportFee,
  bridgeFee,
  grandTotalFare,
  setFareType,
  setMeterBaseFare,
  setCashPayment,
  setAirportFee,
  setBridgeFee,
  setGrandTotalFare,
  handleCalculate,
}: FareInputProps) => {
  return (
    <>
      {/* Fare Type Input */}
      <FormControl fullWidth margin="normal">
        <Typography variant="body1" gutterBottom>
          Fare Type
        </Typography>
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
      <FormControl fullWidth margin="normal">
        <TextField
          id="meter-base-fare"
          label="Meter Base Fare"
          type="number"
          value={meterBaseFare}
          onChange={(e) => setMeterBaseFare(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
      </FormControl>
      {/* Bridge Fee Input */}
      <FormControl fullWidth margin="normal">
        <TextField
          id="bridge-fee"
          label="Bridge Fee"
          type="number"
          value={bridgeFee}
          onChange={(e) => setBridgeFee(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
      </FormControl>
      {/* Grand Total Input */}
      <FormControl fullWidth margin="normal">
        <TextField
          id="grand-total-fare"
          label="Grand Total"
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
              checked={airportFee}
              onChange={(e) => setAirportFee(e.target.checked)}
            />
          }
          label="Airport Fee"
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
      <Grid container direction={'row'} spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleCalculate}>
            Calculate
          </Button>
        </Grid>
        {/* <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleCalculate}>
            Submit
          </Button>
        </Grid> */}
      </Grid>
    </>
  );
};

export default FareInput;
