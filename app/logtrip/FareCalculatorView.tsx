'use client';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import FareInput from './components/FareInput';
import InvoiceView from './components/InvoiceView';
import generateFareData from './utils/calculateFare';

const FareCalculatorView = () => {
  const [fareType, setFareType] = useState('short');
  const [meterBaseFare, setMeterBaseFare] = useState('');
  const [cashPayment, setCashPayment] = useState(false);
  const [airportFee, setAirportFee] = useState(false);
  const [bridgeFee, setBridgeFee] = useState('');
  const [grandTotalFare, setGrandTotalFare] = useState('');
  const [, setTips] = useState(0);
  const [, setSubTotal] = useState(0);
  const [data, setData] = useState({
    fareType: '',
    baseFare: 0,
    longTripBonus: 0,
    cashPayment: false,
    airportFee: false,
    bridgeFee: 0,
    tips: 0,
    subTotal: 0,
    grandTotal: 0,
  });

  const handleCalculate = () => {
    const [subTotal, tips] = generateFareData({
      type: fareType,
      base: meterBaseFare,
      airportFee: airportFee,
      bridgeFee: bridgeFee,
      grandTotal: grandTotalFare,
    });
    setTips(tips);
    setSubTotal(subTotal);
    setData({
      ...data,
      fareType: fareType,
      baseFare: parseFloat(meterBaseFare),
      longTripBonus: fareType === 'long' ? Number(meterBaseFare) * 0.5 : 0,
      cashPayment: cashPayment,
      airportFee,
      bridgeFee: parseFloat(bridgeFee),
      tips: tips,
      subTotal,
      grandTotal: parseFloat(grandTotalFare),
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h5" gutterBottom>
        Fare Calculator
      </Typography>
      {/* Fare Type Input */}
      <FareInput
        fareType={fareType}
        meterBaseFare={meterBaseFare}
        cashPayment={cashPayment}
        airportFee={airportFee}
        bridgeFee={bridgeFee}
        grandTotalFare={grandTotalFare}
        setFareType={setFareType}
        setMeterBaseFare={setMeterBaseFare}
        setCashPayment={setCashPayment}
        setAirportFee={setAirportFee}
        setBridgeFee={setBridgeFee}
        setGrandTotalFare={setGrandTotalFare}
        handleCalculate={handleCalculate}
      />
      <Divider />
      {/* Fare Invoice */}

      <InvoiceView {...data} />
    </Container>
  );
};

export default FareCalculatorView;
