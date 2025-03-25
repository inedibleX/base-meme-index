import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ActionButton } from '../action-button'

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
  })
})
