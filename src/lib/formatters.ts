export const tokenFormatOptions = (
  tokenSymbol: string,
): Intl.NumberFormatOptions => {
  return {
    style: 'currency',
    currency: tokenSymbol,
    currencyDisplay: 'name',
    maximumFractionDigits: 0,
    roundingMode: 'floor',
  }
}

export const tokenFormat = (tokenSymbol: string) =>
  new Intl.NumberFormat('en-US', tokenFormatOptions(tokenSymbol))

export const compactTokenFormat = (tokenSymbol: string) =>
  new Intl.NumberFormat('en-US', {
    ...tokenFormatOptions(tokenSymbol),
    notation: 'compact',
    compactDisplay: 'short',
    roundingMode: 'ceil',
  })

export const dateFormat = new Intl.DateTimeFormat('en-US')

export const percentageFormat = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 0,
})

export const decimalFormat = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  maximumFractionDigits: 0,
})

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
): string {
  const parsedNumber = parseFloat(number as unknown as string)
  if (isNaN(parsedNumber) || number === '' || number === undefined) return '0'

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  }).format(parsedNumber)
}
