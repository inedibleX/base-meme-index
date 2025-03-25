import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { NumberInput } from '@/app/(main)/components/number-input'

describe('NumberInput', () => {
  it('renders with empty value', () => {
    render(<NumberInput value={undefined} />)
    const input = screen.getByRole('spinbutton')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(null)
    expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
  })

  it('handles numeric input correctly', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<NumberInput onChange={onChange} value="" />)
    const input = screen.getByRole('spinbutton')

    await user.type(input, '42.5')
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  it('ignores non-numeric characters', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<NumberInput onChange={onChange} value="" />)
    const input = screen.getByRole('spinbutton')

    await user.type(input, 'abc,$')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('handles comma input by not triggering onChange', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<NumberInput onChange={onChange} value="" />)
    const input = screen.getByRole('spinbutton')

    await user.type(input, '1,5')
    expect(onChange).not.toHaveBeenCalledWith('1,5')
  })

  it('shows clear button when value exists and clears on click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<NumberInput onChange={onChange} value="123" />)

    const clearButton = screen.getByLabelText('Clear input')
    expect(clearButton).toBeInTheDocument()

    await user.click(clearButton)
    expect(onChange).toHaveBeenCalledWith(undefined)
  })

  it('does not show clear button when value is empty', () => {
    render(<NumberInput onChange={() => {}} value="" />)
    expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument()
  })
})
