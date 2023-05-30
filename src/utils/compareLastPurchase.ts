const parseDate = (dateString: string): Date | null => {
  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const year = parseInt(dateParts[2]);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.error('Invalid date:', dateString);
    return null;
  }

  return new Date(year, month, day);
};
export const compareLastPurchase = (lastPurchase: string): number => {
  const currentDate = new Date();
  const lastPurchaseDate = parseDate(lastPurchase);

  if (lastPurchaseDate === null) {
    return 0;
  }

  const currentTimestamp = currentDate.getTime();
  const lastPurchaseTimestamp = lastPurchaseDate.getTime();

  const differenceInMilliseconds = currentTimestamp - lastPurchaseTimestamp;
  const differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );

  return differenceInDays;
};
