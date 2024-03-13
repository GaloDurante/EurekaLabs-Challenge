export const calculateAveragePrice = (variants, option) => {
  let price = 0;
  let contPresentations = 0;
  variants.forEach((variant) => {
    if (variant.option1 === option) {
      price += Number(variant.price);
      contPresentations++;
    }
  });
  // parse the result to 2 decimals
  return Number(Number.parseFloat(price / contPresentations).toFixed(2));
};
