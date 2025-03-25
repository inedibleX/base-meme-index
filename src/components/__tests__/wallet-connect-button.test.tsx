import { act, fireEvent, screen } from '@testing-library/react'
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  MockInstance,
  test,
  vi,
} from 'vitest'

import { WalletConnectButton } from '@/components/wallet-connect-button'
import { renderWithProviders } from '@/test'
import { mockWallet } from '@/test/mock-wallet'

let mockError: ReturnType<MockInstance['mockImplementation']>

beforeAll(() => {
  // Silence the `An empty string ("")` error logs
  mockError = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  mockError.mockRestore()
})

describe('WalletConnectButton', () => {
  test('should show loading state when mounted', async () => {
    renderWithProviders(
      <WalletConnectButton>
        <div>Connected Content</div>
      </WalletConnectButton>,
    )

    await act(() => {
      expect(screen.getByRole('button')).toBeDisabled()
      expect(screen.getByRole('button')).toHaveTextContent('Checking Wallet...')
    })
  })

  test('should show "Connect to Wallet" when user is not connected', async () => {
    // Use act to handle the useEffect
    await act(async () => {
      renderWithProviders(
        <WalletConnectButton>
          <div>Connected Content</div>
        </WalletConnectButton>,
      )
    })

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('Connect to Wallet')
  })

  test('should show children content when connected', async () => {
    await act(async () => {
      renderWithProviders(
        <WalletConnectButton>
          <div>Connected Content</div>
        </WalletConnectButton>,
        {
          mockWallets: [
            {
              groupName: 'Wallets',
              wallets: [mockWallet('metamask', 'Metamask')],
            },
          ],
        },
      )
    })

    await act(async () => {
      const btn = screen.getByText('Connect to Wallet')
      fireEvent.click(btn)
    })

    expect(screen.getByText('Metamask')).toBeInTheDocument()

    await act(async () => {
      const btn = screen.getByText('Metamask')
      fireEvent.click(btn)
    })

    expect(screen.getByText('Connected Content')).toBeInTheDocument()
  })
})
