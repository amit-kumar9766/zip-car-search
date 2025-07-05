export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatMileage = (mileage: number) => {
  return new Intl.NumberFormat("en-US").format(mileage);
};

export const validateZipCode = (zip: string) => {
  const zipRegex = /^\d{5}$/;
  return zipRegex.test(zip);
};

export const capitalizeField = (field: string) =>
  field.charAt(0).toUpperCase() + field.slice(1);
