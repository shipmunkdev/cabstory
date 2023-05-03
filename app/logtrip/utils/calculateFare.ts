const generateFareData = ({
  base = '',
  type = 'regular',
  airportFee = 5.5,
  bridgeFee = '',
  grandTotal = '',
} = {}) => {
  let eqTotal = parseFloat(base);
  // long trip is 1.5x the meter base fare
  if (type === 'long') {
    eqTotal *= 1.5;
  }
  // add bridge fee if applicable
  if (bridgeFee) {
    eqTotal += parseFloat(bridgeFee);
  }
  // add flat airport fee to every trip
  eqTotal += airportFee;
  // calculate subtotal by adding tips to eqTotal
  const subTotal: number = eqTotal;
  // calculate tips by subtracting subTotal from grandTotalFare
  const tips = parseFloat(grandTotal) - subTotal;

  return [subTotal, parseFloat(tips.toFixed(2))];
};

export default generateFareData;
