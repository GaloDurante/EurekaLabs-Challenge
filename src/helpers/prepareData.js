/* eslint-disable max-len */
import { calculateAveragePrice } from './calculateAveragePrice';

export const prepareData = (data) => {
  const newData = data
    .map((item) => {
      if (item.product_type === 'diapers') {
        const ops = item.options[0].values; // contains the different variants for a product
        return {
          variants: ops.map((op) => {
            return {
              title: item.vendor + ' - ' + op,
              average_price: calculateAveragePrice(item.variants, op), // calculate the average price for each variant
              presentations: item.variants // contains the different presentation for a variant
                .map((variant) => {
                  if (variant.option1 === op) {
                    return {
                      price: variant.price,
                      availability: item.presentationsBySizeInStock[op]?.find(
                        (stock) => stock.quantity === variant.option2,
                      )
                        ? true
                        : false,
                      variant_presentation: variant.option2,
                      image_url: item.images.find(
                        (img) => img.variant_ids.includes(variant.id), //find the corresponding image for the presentation
                      ).src,
                    };
                  }
                })
                .filter((presentation) => presentation !== undefined), // filter out the undefined values
            };
          }),
        };
      }
    })
    .filter((item) => item !== undefined); // filter out the undefined values
  return newData;
};

export const prepareData2 = (data) => {
  const newData = data
    .map((item) => {
      if (item.product_type === 'diapers') {
        const ops = item.options[0].values; // contains the different variants for a product
        return {
          variants: ops.map((op) => {
            return {
              title: item.vendor + ' - ' + op,
              average_price: calculateAveragePrice(item.variants, op), // calculate the average price for each variant
              presentations: item.variants // contains the different presentation for a variant
                .map((variant) => {
                  if (variant.option1 === op) {
                    return {
                      price: variant.price,
                      availability: item.presentationsBySizeInStock[op]?.find(
                        (stock) => stock.quantity === variant.option2,
                      )
                        ? true
                        : false,
                      variant_presentation: variant.option2,
                      image_url: item.images.find(
                        (img) => img.variant_ids.includes(variant.id), //find the corresponding image for the presentation
                      ).src,
                    };
                  }
                })
                .filter((presentation) => presentation !== undefined), // filter out the undefined values
            };
          }),
        };
      }
    })
    .filter((item) => item !== undefined); // filter out the undefined values
  return newData;
};
