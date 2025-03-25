import { X } from 'lucide-react'

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
    <div className="relative w-full">
      <input
        className="w-full [appearance:textfield] rounded-lg border border-sky-200 bg-white px-4 py-2 pr-8 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
      {value && (
        <button
          aria-label="Clear input"
          className="absolute top-1/2 right-2.5 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-slate-400 hover:text-slate-600 focus:outline-none"
          onClick={() => onChange?.(undefined)}
          type="button"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
