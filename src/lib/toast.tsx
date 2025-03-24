import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

export function toastSuccess(message: string, description?: string) {
  toast.success(message, {
    description,
    className: '!bg-foreground !text-white',
    descriptionClassName: '!text-white',
  })
}

export function toastError(message: string, description?: string) {
  toast.error(message, {
    description,
    className: '!bg-destructive !text-white',
    descriptionClassName: '!text-white',
  })
}

export function toastTxSuccess(
  message: string,
  description?: string,
  hash?: string,
) {
  const url = `https://basescan.org/tx/${hash}`
  return toast.custom((id) => (
    <CustomToast
      button={{
        label: 'View Tx',
        onClick: () => window.open(url, '_blank'),
      }}
      description={description || ''}
      id={id}
      title={message}
    />
  ))
}

function CustomToast(props: ToastProps) {
  const { title, description, button, id } = props

  return (
    <div className="bg-foreground flex w-full items-center rounded-lg p-4 text-white ring-1 shadow-lg ring-black/5 md:max-w-[364px]">
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium">{title}</p>
          <p className="mt-1 text-sm">{description}</p>
        </div>
      </div>
      <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
        <Button
          onClick={() => {
            button.onClick()
            toast.dismiss(id)
          }}
          size="sm"
        >
          {button.label}
        </Button>
      </div>
    </div>
  )
}

interface ToastProps {
  id: string | number
  title: string
  description: string
  button: {
    label: string
    onClick: () => void
  }
}
