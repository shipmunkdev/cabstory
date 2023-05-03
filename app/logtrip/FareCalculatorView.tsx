'use client';

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
      cashPayment: cashPayment,
      airportFee,
      bridgeFee: parseFloat(bridgeFee),
      tips: tips,
      subTotal,
      grandTotal: parseFloat(grandTotalFare),
    });
  };

  return (
    <>
      <Typography component="h1" variant="h5" gutterBottom>
        Fare Calculator
      </Typography>
      {/* Fare Type Input */}
      <FareInput
        fareType={fareType}
        setFareType={setFareType}
        meterBaseFare={meterBaseFare}
        setMeterBaseFare={setMeterBaseFare}
        cashPayment={cashPayment}
        setCashPayment={setCashPayment}
        airportFee={airportFee}
        setAirportFee={setAirportFee}
        bridgeFee={bridgeFee}
        setBridgeFee={setBridgeFee}
        grandTotalFare={grandTotalFare}
        setGrandTotalFare={setGrandTotalFare}
        handleCalculate={handleCalculate}
      />
      {/* Fare Invoice */}
      <InvoiceView {...data} />
    </>
  );
};

export default FareCalculatorView;
