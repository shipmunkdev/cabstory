import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

export type InvoiceProps = {
  baseFare: number;
  fareType: string;
  airportFee: number;
  bridgeFee: number;
  tips: number;
  subTotal: number;
  grandTotal: number;
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const InvoiceView = ({
  baseFare,
  fareType,
  airportFee,
  bridgeFee,
  tips,
  subTotal,
  grandTotal,
}: InvoiceProps) => {
  console.log(JSON.stringify(baseFare));
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Fare Invoice{' '}
        {fareType === 'long' ? (
          <Chip label={capitalizeFirstLetter(fareType)} color="primary" />
        ) : null}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={8} sx={{ textAlign: 'left', fontWeight: 'bold' }}>
          <Typography variant="h6">Base Meter Fare:</Typography>
          {fareType === 'long' ? (
            <Typography variant="h6">Out of Town:</Typography>
          ) : null}
          <Typography variant="h6">Airport Fee:</Typography>
          <Typography variant="h6">Bridge Fee:</Typography>
          <Typography variant="h6">Tips:</Typography>
          <Typography variant="h6">Sub Total:</Typography>
          <Typography variant="h6">Grand Total:</Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'right', fontWeight: 'bold' }}>
          <Typography variant="h6">${baseFare}</Typography>
          {fareType === 'long' ? (
            <Typography variant="h6">${baseFare * 0.5}</Typography>
          ) : null}
          <Typography variant="h6">${airportFee}</Typography>
          <Typography variant="h6">${bridgeFee}</Typography>
          <Typography variant="h6">${tips}</Typography>
          <Typography variant="h6">${subTotal}</Typography>
          <Typography variant="h6">${grandTotal}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default InvoiceView;
