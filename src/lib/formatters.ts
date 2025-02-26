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
