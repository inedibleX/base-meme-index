type NumberInputProps = Omit<
  React.ComponentProps<'input'>,
  'onChange' | 'value'
> & {
  value: string | undefined
  onChange?: (value: string | undefined) => void
}

export const NumberInput = ({
  value,
  onChange,
  ...props
}: NumberInputProps) => {
  return (
    <input
      className="w-full [appearance:textfield] rounded-lg border border-sky-200 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      min="0"
      onChange={(e) => {
        if (onChange) {
          const value = e.target.value
          const number = Number(value)
          if (!isNaN(number)) {
            onChange(value)
          }
        }
      }}
      placeholder="0.0"
      step="0.01"
      type="number"
      value={value}
      {...props}
    />
  )
}
