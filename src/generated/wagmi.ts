import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BMIToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const bmiTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'params',
        internalType: 'struct WeightedPool.NewPoolParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          {
            name: 'tokens',
            internalType: 'contract IERC20[]',
            type: 'address[]',
          },
          {
            name: 'normalizedWeights',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          {
            name: 'rateProviders',
            internalType: 'contract IRateProvider[]',
            type: 'address[]',
          },
          {
            name: 'assetManagers',
            internalType: 'address[]',
            type: 'address[]',
          },
          {
            name: 'swapFeePercentage',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
      { name: 'vault', internalType: 'contract IVault', type: 'address' },
      {
        name: 'protocolFeeProvider',
        internalType: 'contract IProtocolFeePercentagesProvider',
        type: 'address',
      },
      { name: 'pauseWindowDuration', internalType: 'uint256', type: 'uint256' },
      {
        name: 'bufferPeriodDuration',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'version', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'paused', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'PausedStateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'feeType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'protocolFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProtocolFeePercentageCacheUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RecoveryModeStateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'swapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SwapFeePercentageChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disableRecoveryMode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enableRecoveryMode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getATHRateProduct',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'selector', internalType: 'bytes4', type: 'bytes4' }],
    name: 'getActionId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getActualSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAuthorizer',
    outputs: [
      { name: '', internalType: 'contract IAuthorizer', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDomainSeparator',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getInvariant',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastPostJoinExitInvariant',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNextNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNormalizedWeights',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPausedState',
    outputs: [
      { name: 'paused', internalType: 'bool', type: 'bool' },
      { name: 'pauseWindowEndTime', internalType: 'uint256', type: 'uint256' },
      { name: 'bufferPeriodEndTime', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPoolId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'feeType', internalType: 'uint256', type: 'uint256' }],
    name: 'getProtocolFeePercentageCache',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProtocolFeesCollector',
    outputs: [
      {
        name: '',
        internalType: 'contract IProtocolFeesCollector',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProtocolSwapFeeDelegation',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRateProviders',
    outputs: [
      { name: '', internalType: 'contract IRateProvider[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getScalingFactors',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSwapFeePercentage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getVault',
    outputs: [{ name: '', internalType: 'contract IVault', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'inRecoveryMode',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onExitPool',
    outputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onJoinPool',
    outputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct IPoolSwapStructs.SwapRequest',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'enum IVault.SwapKind', type: 'uint8' },
          { name: 'tokenIn', internalType: 'contract IERC20', type: 'address' },
          {
            name: 'tokenOut',
            internalType: 'contract IERC20',
            type: 'address',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'balanceTokenIn', internalType: 'uint256', type: 'uint256' },
      { name: 'balanceTokenOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'onSwap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'queryExit',
    outputs: [
      { name: 'bptIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsOut', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'queryJoin',
    outputs: [
      { name: 'bptOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsIn', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'poolConfig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setAssetManagerPoolConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'swapFeePercentage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setSwapFeePercentage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'updateProtocolFeePercentageCache',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const bmiTokenAddress = {
  8453: '0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const bmiTokenConfig = {
  address: bmiTokenAddress,
  abi: bmiTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IndexFund
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const indexFundAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'params',
        internalType: 'struct WeightedPool.NewPoolParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          {
            name: 'tokens',
            internalType: 'contract IERC20[]',
            type: 'address[]',
          },
          {
            name: 'normalizedWeights',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          {
            name: 'rateProviders',
            internalType: 'contract IRateProvider[]',
            type: 'address[]',
          },
          {
            name: 'assetManagers',
            internalType: 'address[]',
            type: 'address[]',
          },
          {
            name: 'swapFeePercentage',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
      { name: 'vault', internalType: 'contract IVault', type: 'address' },
      {
        name: 'protocolFeeProvider',
        internalType: 'contract IProtocolFeePercentagesProvider',
        type: 'address',
      },
      { name: 'pauseWindowDuration', internalType: 'uint256', type: 'uint256' },
      {
        name: 'bufferPeriodDuration',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'version', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'paused', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'PausedStateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'feeType',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'protocolFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProtocolFeePercentageCacheUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RecoveryModeStateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'swapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SwapFeePercentageChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disableRecoveryMode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enableRecoveryMode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getATHRateProduct',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'selector', internalType: 'bytes4', type: 'bytes4' }],
    name: 'getActionId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getActualSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAuthorizer',
    outputs: [
      { name: '', internalType: 'contract IAuthorizer', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDomainSeparator',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getInvariant',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastPostJoinExitInvariant',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNextNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNormalizedWeights',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPausedState',
    outputs: [
      { name: 'paused', internalType: 'bool', type: 'bool' },
      { name: 'pauseWindowEndTime', internalType: 'uint256', type: 'uint256' },
      { name: 'bufferPeriodEndTime', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPoolId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'feeType', internalType: 'uint256', type: 'uint256' }],
    name: 'getProtocolFeePercentageCache',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProtocolFeesCollector',
    outputs: [
      {
        name: '',
        internalType: 'contract IProtocolFeesCollector',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProtocolSwapFeeDelegation',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRateProviders',
    outputs: [
      { name: '', internalType: 'contract IRateProvider[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getScalingFactors',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSwapFeePercentage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getVault',
    outputs: [{ name: '', internalType: 'contract IVault', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'inRecoveryMode',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onExitPool',
    outputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onJoinPool',
    outputs: [
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct IPoolSwapStructs.SwapRequest',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'enum IVault.SwapKind', type: 'uint8' },
          { name: 'tokenIn', internalType: 'contract IERC20', type: 'address' },
          {
            name: 'tokenOut',
            internalType: 'contract IERC20',
            type: 'address',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'balanceTokenIn', internalType: 'uint256', type: 'uint256' },
      { name: 'balanceTokenOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'onSwap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'queryExit',
    outputs: [
      { name: 'bptIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsOut', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      {
        name: 'protocolSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'queryJoin',
    outputs: [
      { name: 'bptOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsIn', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'poolConfig', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setAssetManagerPoolConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'swapFeePercentage', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setSwapFeePercentage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'updateProtocolFeePercentageCache',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const indexFundAddress = {
  8453: '0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const indexFundConfig = {
  address: indexFundAddress,
  abi: indexFundAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vault
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const vaultAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'authorizer',
        internalType: 'contract IAuthorizer',
        type: 'address',
      },
      { name: 'weth', internalType: 'contract IWETH', type: 'address' },
      { name: 'pauseWindowDuration', internalType: 'uint256', type: 'uint256' },
      {
        name: 'bufferPeriodDuration',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAuthorizer',
        internalType: 'contract IAuthorizer',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ExternalBalanceTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'contract IFlashLoanRecipient',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FlashLoan',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      { name: 'delta', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'InternalBalanceChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'paused', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'PausedStateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'liquidityProvider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokens',
        internalType: 'contract IERC20[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'deltas',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
      {
        name: 'protocolFeeAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'PoolBalanceChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'assetManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'cashDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'managedDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
    ],
    name: 'PoolBalanceManaged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'poolAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'specialization',
        internalType: 'enum IVault.PoolSpecialization',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'PoolRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'relayer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RelayerApprovalChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'tokenIn',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOut',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Swap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'tokens',
        internalType: 'contract IERC20[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'TokensDeregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'tokens',
        internalType: 'contract IERC20[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'assetManagers',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'TokensRegistered',
  },
  {
    type: 'function',
    inputs: [],
    name: 'WETH',
    outputs: [{ name: '', internalType: 'contract IWETH', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kind', internalType: 'enum IVault.SwapKind', type: 'uint8' },
      {
        name: 'swaps',
        internalType: 'struct IVault.BatchSwapStep[]',
        type: 'tuple[]',
        components: [
          { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'assetInIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'assetOutIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'assets', internalType: 'contract IAsset[]', type: 'address[]' },
      {
        name: 'funds',
        internalType: 'struct IVault.FundManagement',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'fromInternalBalance', internalType: 'bool', type: 'bool' },
          {
            name: 'recipient',
            internalType: 'address payable',
            type: 'address',
          },
          { name: 'toInternalBalance', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'limits', internalType: 'int256[]', type: 'int256[]' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'batchSwap',
    outputs: [
      { name: 'assetDeltas', internalType: 'int256[]', type: 'int256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokens', internalType: 'contract IERC20[]', type: 'address[]' },
    ],
    name: 'deregisterTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address payable', type: 'address' },
      {
        name: 'request',
        internalType: 'struct IVault.ExitPoolRequest',
        type: 'tuple',
        components: [
          {
            name: 'assets',
            internalType: 'contract IAsset[]',
            type: 'address[]',
          },
          {
            name: 'minAmountsOut',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
          { name: 'toInternalBalance', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'exitPool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'recipient',
        internalType: 'contract IFlashLoanRecipient',
        type: 'address',
      },
      { name: 'tokens', internalType: 'contract IERC20[]', type: 'address[]' },
      { name: 'amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'flashLoan',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'selector', internalType: 'bytes4', type: 'bytes4' }],
    name: 'getActionId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAuthorizer',
    outputs: [
      { name: '', internalType: 'contract IAuthorizer', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDomainSeparator',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'tokens', internalType: 'contract IERC20[]', type: 'address[]' },
    ],
    name: 'getInternalBalance',
    outputs: [
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getNextNonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPausedState',
    outputs: [
      { name: 'paused', internalType: 'bool', type: 'bool' },
      { name: 'pauseWindowEndTime', internalType: 'uint256', type: 'uint256' },
      { name: 'bufferPeriodEndTime', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'poolId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getPool',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      {
        name: '',
        internalType: 'enum IVault.PoolSpecialization',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'getPoolTokenInfo',
    outputs: [
      { name: 'cash', internalType: 'uint256', type: 'uint256' },
      { name: 'managed', internalType: 'uint256', type: 'uint256' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'assetManager', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'poolId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getPoolTokens',
    outputs: [
      { name: 'tokens', internalType: 'contract IERC20[]', type: 'address[]' },
      { name: 'balances', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lastChangeBlock', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProtocolFeesCollector',
    outputs: [
      {
        name: '',
        internalType: 'contract ProtocolFeesCollector',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'relayer', internalType: 'address', type: 'address' },
    ],
    name: 'hasApprovedRelayer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'request',
        internalType: 'struct IVault.JoinPoolRequest',
        type: 'tuple',
        components: [
          {
            name: 'assets',
            internalType: 'contract IAsset[]',
            type: 'address[]',
          },
          {
            name: 'maxAmountsIn',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
          { name: 'fromInternalBalance', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'joinPool',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'ops',
        internalType: 'struct IVault.PoolBalanceOp[]',
        type: 'tuple[]',
        components: [
          {
            name: 'kind',
            internalType: 'enum IVault.PoolBalanceOpKind',
            type: 'uint8',
          },
          { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'token', internalType: 'contract IERC20', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'managePoolBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'ops',
        internalType: 'struct IVault.UserBalanceOp[]',
        type: 'tuple[]',
        components: [
          {
            name: 'kind',
            internalType: 'enum IVault.UserBalanceOpKind',
            type: 'uint8',
          },
          { name: 'asset', internalType: 'contract IAsset', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'sender', internalType: 'address', type: 'address' },
          {
            name: 'recipient',
            internalType: 'address payable',
            type: 'address',
          },
        ],
      },
    ],
    name: 'manageUserBalance',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'kind', internalType: 'enum IVault.SwapKind', type: 'uint8' },
      {
        name: 'swaps',
        internalType: 'struct IVault.BatchSwapStep[]',
        type: 'tuple[]',
        components: [
          { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'assetInIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'assetOutIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'assets', internalType: 'contract IAsset[]', type: 'address[]' },
      {
        name: 'funds',
        internalType: 'struct IVault.FundManagement',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'fromInternalBalance', internalType: 'bool', type: 'bool' },
          {
            name: 'recipient',
            internalType: 'address payable',
            type: 'address',
          },
          { name: 'toInternalBalance', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'queryBatchSwap',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'specialization',
        internalType: 'enum IVault.PoolSpecialization',
        type: 'uint8',
      },
    ],
    name: 'registerPool',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokens', internalType: 'contract IERC20[]', type: 'address[]' },
      { name: 'assetManagers', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'registerTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newAuthorizer',
        internalType: 'contract IAuthorizer',
        type: 'address',
      },
    ],
    name: 'setAuthorizer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'paused', internalType: 'bool', type: 'bool' }],
    name: 'setPaused',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'relayer', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setRelayerApproval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'singleSwap',
        internalType: 'struct IVault.SingleSwap',
        type: 'tuple',
        components: [
          { name: 'poolId', internalType: 'bytes32', type: 'bytes32' },
          { name: 'kind', internalType: 'enum IVault.SwapKind', type: 'uint8' },
          { name: 'assetIn', internalType: 'contract IAsset', type: 'address' },
          {
            name: 'assetOut',
            internalType: 'contract IAsset',
            type: 'address',
          },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
        ],
      },
      {
        name: 'funds',
        internalType: 'struct IVault.FundManagement',
        type: 'tuple',
        components: [
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'fromInternalBalance', internalType: 'bool', type: 'bool' },
          {
            name: 'recipient',
            internalType: 'address payable',
            type: 'address',
          },
          { name: 'toInternalBalance', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'limit', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amountCalculated', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const vaultAddress = {
  8453: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const vaultConfig = { address: vaultAddress, abi: vaultAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiToken = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenDelegateProtocolSwapFeesSentinel =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getATHRateProduct"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetAthRateProduct =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getATHRateProduct',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getActionId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetActionId = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getActionId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getActualSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetActualSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getActualSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getAuthorizer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetAuthorizer = /*#__PURE__*/ createUseReadContract(
  { abi: bmiTokenAbi, address: bmiTokenAddress, functionName: 'getAuthorizer' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getDomainSeparator"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getDomainSeparator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getInvariant"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetInvariant = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getInvariant',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getLastPostJoinExitInvariant"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetLastPostJoinExitInvariant =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getLastPostJoinExitInvariant',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getNextNonce"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetNextNonce = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getNextNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getNormalizedWeights"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetNormalizedWeights =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getNormalizedWeights',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetOwner = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getPausedState"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetPausedState =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getPausedState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getPoolId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetPoolId = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getPoolId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getProtocolFeePercentageCache"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetProtocolFeePercentageCache =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getProtocolFeePercentageCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getProtocolFeesCollector"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetProtocolFeesCollector =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getProtocolFeesCollector',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getProtocolSwapFeeDelegation"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetProtocolSwapFeeDelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getProtocolSwapFeeDelegation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getRateProviders"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetRateProviders =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getRateProviders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getScalingFactors"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetScalingFactors =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getScalingFactors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetSwapFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getSwapFeePercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getVault"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenGetVault = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getVault',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"inRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenInRecoveryMode =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'inRecoveryMode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenName = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"version"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useReadBmiTokenVersion = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'version',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiToken = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"disableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenDisableRecoveryMode =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'disableRecoveryMode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"enableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenEnableRecoveryMode =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'enableRecoveryMode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"onExitPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenOnExitPool = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'onExitPool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"onJoinPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenOnJoinPool = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'onJoinPool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"onSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenOnSwap = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'onSwap',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenPause = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"queryExit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenQueryExit = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'queryExit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"queryJoin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenQueryJoin = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'queryJoin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"setAssetManagerPoolConfig"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenSetAssetManagerPoolConfig =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'setAssetManagerPoolConfig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"setSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenSetSwapFeePercentage =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'setSwapFeePercentage',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"updateProtocolFeePercentageCache"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWriteBmiTokenUpdateProtocolFeePercentageCache =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'updateProtocolFeePercentageCache',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiToken = /*#__PURE__*/ createUseSimulateContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"disableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenDisableRecoveryMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'disableRecoveryMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"enableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenEnableRecoveryMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'enableRecoveryMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"onExitPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenOnExitPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'onExitPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"onJoinPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenOnJoinPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'onJoinPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"onSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenOnSwap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'onSwap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenPause = /*#__PURE__*/ createUseSimulateContract(
  { abi: bmiTokenAbi, address: bmiTokenAddress, functionName: 'pause' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"queryExit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenQueryExit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'queryExit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"queryJoin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenQueryJoin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'queryJoin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"setAssetManagerPoolConfig"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenSetAssetManagerPoolConfig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'setAssetManagerPoolConfig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"setSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenSetSwapFeePercentage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'setSwapFeePercentage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"updateProtocolFeePercentageCache"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useSimulateBmiTokenUpdateProtocolFeePercentageCache =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'updateProtocolFeePercentageCache',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWatchBmiTokenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWatchBmiTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"PausedStateChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWatchBmiTokenPausedStateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'PausedStateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"ProtocolFeePercentageCacheUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWatchBmiTokenProtocolFeePercentageCacheUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'ProtocolFeePercentageCacheUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"RecoveryModeStateChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWatchBmiTokenRecoveryModeStateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'RecoveryModeStateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"SwapFeePercentageChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWatchBmiTokenSwapFeePercentageChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'SwapFeePercentageChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xFfA997dFeD184a220392ebaE7C054c39D87Ad00f)
 */
export const useWatchBmiTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFund = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundDelegateProtocolSwapFeesSentinel =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundAllowance = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundDecimals = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getATHRateProduct"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetAthRateProduct =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getATHRateProduct',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getActionId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetActionId = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'getActionId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getActualSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetActualSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getActualSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getAuthorizer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetAuthorizer =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getAuthorizer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getDomainSeparator"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getDomainSeparator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getInvariant"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetInvariant = /*#__PURE__*/ createUseReadContract(
  {
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getInvariant',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getLastPostJoinExitInvariant"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetLastPostJoinExitInvariant =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getLastPostJoinExitInvariant',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getNextNonce"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetNextNonce = /*#__PURE__*/ createUseReadContract(
  {
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getNextNonce',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getNormalizedWeights"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetNormalizedWeights =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getNormalizedWeights',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetOwner = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'getOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getPausedState"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetPausedState =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getPausedState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getPoolId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetPoolId = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'getPoolId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getProtocolFeePercentageCache"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetProtocolFeePercentageCache =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getProtocolFeePercentageCache',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getProtocolFeesCollector"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetProtocolFeesCollector =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getProtocolFeesCollector',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getProtocolSwapFeeDelegation"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetProtocolSwapFeeDelegation =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getProtocolSwapFeeDelegation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getRateProviders"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetRateProviders =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getRateProviders',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getScalingFactors"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetScalingFactors =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getScalingFactors',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetSwapFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'getSwapFeePercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"getVault"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundGetVault = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'getVault',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"inRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundInRecoveryMode =
  /*#__PURE__*/ createUseReadContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'inRecoveryMode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundName = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundNonces = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundSymbol = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"version"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useReadIndexFundVersion = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'version',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFund = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundApprove = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"disableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundDisableRecoveryMode =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'disableRecoveryMode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"enableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundEnableRecoveryMode =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'enableRecoveryMode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"onExitPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundOnExitPool = /*#__PURE__*/ createUseWriteContract(
  { abi: indexFundAbi, address: indexFundAddress, functionName: 'onExitPool' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"onJoinPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundOnJoinPool = /*#__PURE__*/ createUseWriteContract(
  { abi: indexFundAbi, address: indexFundAddress, functionName: 'onJoinPool' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"onSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundOnSwap = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'onSwap',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundPause = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundPermit = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"queryExit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundQueryExit = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'queryExit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"queryJoin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundQueryJoin = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'queryJoin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"setAssetManagerPoolConfig"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundSetAssetManagerPoolConfig =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'setAssetManagerPoolConfig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"setSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundSetSwapFeePercentage =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'setSwapFeePercentage',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"updateProtocolFeePercentageCache"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWriteIndexFundUpdateProtocolFeePercentageCache =
  /*#__PURE__*/ createUseWriteContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'updateProtocolFeePercentageCache',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFund = /*#__PURE__*/ createUseSimulateContract({
  abi: indexFundAbi,
  address: indexFundAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"disableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundDisableRecoveryMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'disableRecoveryMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"enableRecoveryMode"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundEnableRecoveryMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'enableRecoveryMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"onExitPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundOnExitPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'onExitPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"onJoinPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundOnJoinPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'onJoinPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"onSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundOnSwap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'onSwap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"queryExit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundQueryExit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'queryExit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"queryJoin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundQueryJoin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'queryJoin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"setAssetManagerPoolConfig"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundSetAssetManagerPoolConfig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'setAssetManagerPoolConfig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"setSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundSetSwapFeePercentage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'setSwapFeePercentage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"updateProtocolFeePercentageCache"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useSimulateIndexFundUpdateProtocolFeePercentageCache =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'updateProtocolFeePercentageCache',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link indexFundAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWatchIndexFundEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: indexFundAbi, address: indexFundAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link indexFundAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWatchIndexFundApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: indexFundAbi,
    address: indexFundAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link indexFundAbi}__ and `eventName` set to `"PausedStateChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWatchIndexFundPausedStateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: indexFundAbi,
    address: indexFundAddress,
    eventName: 'PausedStateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link indexFundAbi}__ and `eventName` set to `"ProtocolFeePercentageCacheUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWatchIndexFundProtocolFeePercentageCacheUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: indexFundAbi,
    address: indexFundAddress,
    eventName: 'ProtocolFeePercentageCacheUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link indexFundAbi}__ and `eventName` set to `"RecoveryModeStateChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWatchIndexFundRecoveryModeStateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: indexFundAbi,
    address: indexFundAddress,
    eventName: 'RecoveryModeStateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link indexFundAbi}__ and `eventName` set to `"SwapFeePercentageChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWatchIndexFundSwapFeePercentageChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: indexFundAbi,
    address: indexFundAddress,
    eventName: 'SwapFeePercentageChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link indexFundAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB35)
 */
export const useWatchIndexFundTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: indexFundAbi,
    address: indexFundAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVault = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"WETH"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultWeth = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'WETH',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getActionId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetActionId = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'getActionId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getAuthorizer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetAuthorizer = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'getAuthorizer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getDomainSeparator"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'getDomainSeparator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getInternalBalance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetInternalBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'getInternalBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getNextNonce"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetNextNonce = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'getNextNonce',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getPausedState"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetPausedState = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'getPausedState',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetPool = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'getPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getPoolTokenInfo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetPoolTokenInfo = /*#__PURE__*/ createUseReadContract(
  { abi: vaultAbi, address: vaultAddress, functionName: 'getPoolTokenInfo' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getPoolTokens"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetPoolTokens = /*#__PURE__*/ createUseReadContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'getPoolTokens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"getProtocolFeesCollector"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultGetProtocolFeesCollector =
  /*#__PURE__*/ createUseReadContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'getProtocolFeesCollector',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"hasApprovedRelayer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useReadVaultHasApprovedRelayer =
  /*#__PURE__*/ createUseReadContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'hasApprovedRelayer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVault = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"batchSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultBatchSwap = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'batchSwap',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"deregisterTokens"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultDeregisterTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'deregisterTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"exitPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultExitPool = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'exitPool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"flashLoan"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultFlashLoan = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'flashLoan',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"joinPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultJoinPool = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'joinPool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"managePoolBalance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultManagePoolBalance =
  /*#__PURE__*/ createUseWriteContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'managePoolBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"manageUserBalance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultManageUserBalance =
  /*#__PURE__*/ createUseWriteContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'manageUserBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"queryBatchSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultQueryBatchSwap = /*#__PURE__*/ createUseWriteContract(
  { abi: vaultAbi, address: vaultAddress, functionName: 'queryBatchSwap' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"registerPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultRegisterPool = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'registerPool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"registerTokens"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultRegisterTokens = /*#__PURE__*/ createUseWriteContract(
  { abi: vaultAbi, address: vaultAddress, functionName: 'registerTokens' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"setAuthorizer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultSetAuthorizer = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'setAuthorizer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"setPaused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultSetPaused = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'setPaused',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"setRelayerApproval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultSetRelayerApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'setRelayerApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWriteVaultSwap = /*#__PURE__*/ createUseWriteContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVault = /*#__PURE__*/ createUseSimulateContract({
  abi: vaultAbi,
  address: vaultAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"batchSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultBatchSwap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'batchSwap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"deregisterTokens"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultDeregisterTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'deregisterTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"exitPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultExitPool = /*#__PURE__*/ createUseSimulateContract(
  { abi: vaultAbi, address: vaultAddress, functionName: 'exitPool' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"flashLoan"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultFlashLoan =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'flashLoan',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"joinPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultJoinPool = /*#__PURE__*/ createUseSimulateContract(
  { abi: vaultAbi, address: vaultAddress, functionName: 'joinPool' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"managePoolBalance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultManagePoolBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'managePoolBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"manageUserBalance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultManageUserBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'manageUserBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"queryBatchSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultQueryBatchSwap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'queryBatchSwap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"registerPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultRegisterPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'registerPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"registerTokens"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultRegisterTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'registerTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"setAuthorizer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultSetAuthorizer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'setAuthorizer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"setPaused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultSetPaused =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'setPaused',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"setRelayerApproval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultSetRelayerApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: vaultAbi,
    address: vaultAddress,
    functionName: 'setRelayerApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link vaultAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useSimulateVaultSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: vaultAbi,
  address: vaultAddress,
  functionName: 'swap',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: vaultAbi,
  address: vaultAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"AuthorizerChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultAuthorizerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'AuthorizerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"ExternalBalanceTransfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultExternalBalanceTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'ExternalBalanceTransfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"FlashLoan"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultFlashLoanEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'FlashLoan',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"InternalBalanceChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultInternalBalanceChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'InternalBalanceChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"PausedStateChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultPausedStateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'PausedStateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"PoolBalanceChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultPoolBalanceChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'PoolBalanceChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"PoolBalanceManaged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultPoolBalanceManagedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'PoolBalanceManaged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"PoolRegistered"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultPoolRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'PoolRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"RelayerApprovalChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultRelayerApprovalChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'RelayerApprovalChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"Swap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultSwapEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: vaultAbi, address: vaultAddress, eventName: 'Swap' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"TokensDeregistered"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultTokensDeregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'TokensDeregistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link vaultAbi}__ and `eventName` set to `"TokensRegistered"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8)
 */
export const useWatchVaultTokensRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: vaultAbi,
    address: vaultAddress,
    eventName: 'TokensRegistered',
  })
