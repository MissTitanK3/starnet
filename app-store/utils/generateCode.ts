export const generateCode = (start: number, end: number, isNumbersOnly?: boolean) => {
  if (isNumbersOnly) {
    return Math.random().toString().substring(start, end);
  }
  return Math.random().toString(36).substring(start, end).toUpperCase();
};
