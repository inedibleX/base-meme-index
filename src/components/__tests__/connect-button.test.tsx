import { act, fireEvent, screen } from '@testing-library/react'
import { baseSepolia } from 'viem/chains'
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  MockInstance,
  test,
  vi,
} from 'vitest'

import { ConnectButton } from '@/components/connect-button'
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

describe('Given a user is not connected to their wallet', () => {
  test('Should show correct default', async () => {
    const { getByText } = renderWithProviders(<ConnectButton />)

    await act(async () => {
      await vi.dynamicImportSettled()
    })

    expect(getByText('Connect Wallet')).toBeInTheDocument()
  })

  test('Should show custom connect button', async () => {
    const { getByText } = renderWithProviders(
      <ConnectButton connectButton={() => <div>Connect now</div>} />,
    )

    await act(async () => {
      expect(getByText('Connect now')).toBeInTheDocument()
    })
  })
})

describe('Given a user is connected to their wallet', () => {
  test('Should use RainbowKits ConnectButton as default', async () => {
    const { getByText } = renderWithProviders(<ConnectButton />, {
      mockWallets: [
        { groupName: 'Wallets', wallets: [mockWallet('metamask', 'Metamask')] },
      ],
    })

    await act(async () => {
      const btn = screen.getByText('Connect Wallet')
      fireEvent.click(btn)
    })

    expect(getByText('Metamask')).toBeInTheDocument()

    await act(async () => {
      const btn = screen.getByText('Metamask')
      fireEvent.click(btn)
    })

    expect(getByText('0xf39F...2266')).toBeInTheDocument()
  })

  test('Should show custom connectedButton', async () => {
    const { getByText } = renderWithProviders(
      <ConnectButton
        connectedButton={({ account }) => (
          <div>Connected {account.displayName}!</div>
        )}
      />,
      {
        mockWallets: [
          {
            groupName: 'Wallets',
            wallets: [mockWallet('metamask', 'Metamask')],
          },
        ],
      },
    )

    await act(async () => {
      const btn = screen.getByText('Connect Wallet')
      fireEvent.click(btn)
    })

    expect(getByText('Metamask')).toBeInTheDocument()

    await act(async () => {
      const btn = screen.getByText('Metamask')
      fireEvent.click(btn)
    })

    expect(getByText('Connected 0xf3…2266!')).toBeInTheDocument()
  })
})

// TODO: Fix this test, it's failing because we need to switch to the wrong network
// Not sure how to do that yet.
describe.skip('Given a user is on the wrong network', () => {
  test('Should show correct default', async () => {
    const { getByText } = renderWithProviders(
      <ConnectButton
        wrongNetworkButton={({}) => {
          return <div>Wrong network</div>
        }}
      />,
      {
        chains: [baseSepolia],
        mockWallets: [
          {
            groupName: 'Wallets',
            wallets: [mockWallet('metamask', 'Metamask')],
          },
        ],
      },
    )

    await act(async () => {
      const btn = screen.getByText('Connect Wallet')
      fireEvent.click(btn)
    })

    expect(getByText('Metamask')).toBeInTheDocument()

    await act(async () => {
      const btn = screen.getByText('Metamask')
      fireEvent.click(btn)
    })

    expect(getByText('Connected 0xf3…2266!')).toBeInTheDocument()
  })

  test('Should show custom connect button', () => {
    const { getByText } = renderWithProviders(
      <ConnectButton connectButton={() => <div>Connect now</div>} />,
    )

    expect(getByText('Connect now')).toBeInTheDocument()
  })
})
