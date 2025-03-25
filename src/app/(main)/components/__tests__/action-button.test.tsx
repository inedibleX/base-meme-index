import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ActionButton } from '@/app/(main)/components/action-button'

describe('ActionButton', () => {
  it('renders with default text when no children provided', () => {
    render(<ActionButton isLoading={false} />)
    expect(screen.getByRole('button')).toHaveTextContent('Submit')
  })

  it('renders with custom text when children provided', () => {
    render(<ActionButton isLoading={false}>Custom Text</ActionButton>)
    expect(screen.getByRole('button')).toHaveTextContent('Custom Text')
  })

  it('shows loading state with spinner when isLoading is true', () => {
    render(<ActionButton isLoading>Click Me</ActionButton>)
    expect(screen.getByRole('button')).toHaveTextContent('Click Me')
    expect(
      screen.getByRole('button').querySelector('.animate-spin'),
    ).toBeInTheDocument()
  })

  it('applies disabled styles when disabled prop is true', () => {
    render(
      <ActionButton disabled isLoading={false}>
        Click Me
      </ActionButton>,
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cursor-not-allowed')
    expect(button).toHaveClass('opacity-50')
    expect(button).toHaveClass('hover:scale-100')
  })

  it('applies hover styles when not disabled', () => {
    render(<ActionButton isLoading={false}>Click Me</ActionButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('hover:from-blue-400')
    expect(button).toHaveClass('hover:to-sky-400')
    expect(button).toHaveClass('hover:scale-[1.02]')
  })
})
