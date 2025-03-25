/**
 * Formats a number with commas as a separator.
 *
 * @param {number|string} number - The number to be formatted. If a string is provided, it must be convertible to a number.
 * @param [minPrecision=0] - The minimum number of decimal places to include in the formatted number.
 * @param [maxPrecision=4] - The maximum number of decimal places to include in the formatted number.
 * @return {string} The formatted number with commas as a separator.
 */
export function numberFormat(
  number: number | string,
  minPrecision: number = 0,
  maxPrecision: number = 4,
  roundingMode: 'floor' | 'ceil' = 'floor',
): string {
  const parsedNumber = parseFloat(number as unknown as string)
  if (isNaN(parsedNumber) || number === '' || number === undefined) return '0'

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
    roundingMode,
  }).format(parsedNumber)
}
