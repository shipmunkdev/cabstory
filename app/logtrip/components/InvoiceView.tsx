import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';

export type InvoiceProps = {
  fareType: string;
  baseFare: number;
  longTripBonus: number;
  cashPayment: boolean;
  airportFee: boolean;
  bridgeFee: number;
  tips: number;
  subTotal: number;
  grandTotal: number;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const negativeRed = (number: number) => {
  return number < 0 ? 'red' : 'black';
};

const InvoiceView = ({
  fareType,
  baseFare,
  longTripBonus,
  cashPayment,
  airportFee,
  bridgeFee,
  tips,
  subTotal,
  grandTotal,
}: InvoiceProps) => {
  return (
    <Paper variant="outlined" sx={{ padding: '1rem' }}>
      <Typography variant="h6">Fare Invoice </Typography>
      <Grid item xs={12} sx={{ marginY: '0.5rem' }}>
        {
          <Chip
            label={cashPayment ? 'Cash' : 'Credit'}
            color="primary"
            size="small"
            sx={{ marginRight: '1rem' }}
          />
        }
        {fareType ? (
          <Chip
            label={`${capitalizeFirstLetter(fareType)} Fare`}
            color="secondary"
            size="small"
          />
        ) : null}
      </Grid>
      <Grid container spacing={3}>
        {/* Labels */}
        <Grid item xs={8} sx={{ textAlign: 'left', fontWeight: 'bold' }}>
          <Typography>Base Meter Fare:</Typography>
          {fareType === 'long' ? <Typography>Out of Town:</Typography> : null}
          {airportFee ? <Typography>Airport Fee:</Typography> : null}
          <Typography>Bridge Fee:</Typography>
          <Typography>Sub Total:</Typography>
          <Typography>Tips:</Typography>
          <Typography>Grand Total:</Typography>
        </Grid>
        {/* Amount */}
        <Grid item xs={4} sx={{ textAlign: 'right' }}>
          <Typography>${baseFare}</Typography>
          {fareType === 'long' ? (
            <Typography color={negativeRed(longTripBonus)}>
              ${longTripBonus}
            </Typography>
          ) : null}
          {airportFee ? <Typography>$5.50</Typography> : null}
          <Typography>${bridgeFee}</Typography>
          <Typography color={negativeRed(subTotal)}>${subTotal}</Typography>
          <Typography color={negativeRed(tips)}>${tips}</Typography>
          <Typography>${grandTotal}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InvoiceView;
