export const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const DEVELOPMENT_MODE =
  process.env.EXPO_PUBLIC_DEVELOPMENT_MODE === "true";

export const formatCurrency = (amount: number) => {
  // Check if the number is valid
  if (isNaN(amount)) {
    amount = 0;
  }

  // Create Intl.NumberFormat object for Indonesian Rupiah
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Format the number into IDR currency
  return formatter.format(amount);
};
