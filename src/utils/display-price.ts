export const displayPrice = (price: number):string => {
  const actaualPrice = price / 100;

  return `£${actaualPrice.toFixed(2)}`
}