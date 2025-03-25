import { Loader2 } from 'lucide-react'

type ActionButtonProps = {
  isLoading: boolean
} & React.PropsWithChildren<React.ComponentProps<'button'>>

export const ActionButton = ({
  isLoading,
  children = 'Submit',
  ...props
}: ActionButtonProps) => {
  return (
    <button
      className={`flex w-full transform items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] ${props.disabled ? 'cursor-not-allowed opacity-50 hover:scale-100' : 'hover:from-blue-400 hover:to-sky-400'}`}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  )
}
