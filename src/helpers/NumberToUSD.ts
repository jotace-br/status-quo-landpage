export const numberToUSD = (value: number | undefined) => {
  if (value) {
    return Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }
};
