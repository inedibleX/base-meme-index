import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BMIToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
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
          { name: 'numTokens', internalType: 'uint256', type: 'uint256' },
          {
            name: 'normalizedWeights',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'version', internalType: 'string', type: 'string' },
        ],
      },
      { name: 'vault', internalType: 'contract IVault', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'BaseOutOfBounds' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  { type: 'error', inputs: [], name: 'ExponentOutOfBounds' },
  { type: 'error', inputs: [], name: 'InputLengthMismatch' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidExponent' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'InvalidToken' },
  { type: 'error', inputs: [], name: 'MaxInRatio' },
  { type: 'error', inputs: [], name: 'MaxOutRatio' },
  { type: 'error', inputs: [], name: 'MinWeight' },
  { type: 'error', inputs: [], name: 'NormalizedWeightInvariant' },
  { type: 'error', inputs: [], name: 'ProductOutOfBounds' },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderIsNotVault',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'error', inputs: [], name: 'WeightedPoolBptRateUnsupported' },
  { type: 'error', inputs: [], name: 'ZeroDivision' },
  { type: 'error', inputs: [], name: 'ZeroInvariant' },
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
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
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
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
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
    inputs: [
      {
        name: 'balancesLiveScaled18',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: 'tokenInIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'invariantRatio', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeBalance',
    outputs: [{ name: 'newBalance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'balancesLiveScaled18',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: 'rounding', internalType: 'enum Rounding', type: 'uint8' },
    ],
    name: 'computeInvariant',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'emitApproval',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'emitTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAggregateFeePercentages',
    outputs: [
      {
        name: 'aggregateSwapFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'aggregateYieldFeePercentage',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentLiveBalances',
    outputs: [
      {
        name: 'balancesLiveScaled18',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMaximumInvariantRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMaximumSwapFeePercentage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMinimumInvariantRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMinimumSwapFeePercentage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
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
    name: 'getRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStaticSwapFeePercentage',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenInfo',
    outputs: [
      { name: 'tokens', internalType: 'contract IERC20[]', type: 'address[]' },
      {
        name: 'tokenInfo',
        internalType: 'struct TokenInfo[]',
        type: 'tuple[]',
        components: [
          { name: 'tokenType', internalType: 'enum TokenType', type: 'uint8' },
          {
            name: 'rateProvider',
            internalType: 'contract IRateProvider',
            type: 'address',
          },
          { name: 'paysYieldFees', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'balancesRaw', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: 'lastBalancesLiveScaled18',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokens',
    outputs: [
      { name: 'tokens', internalType: 'contract IERC20[]', type: 'address[]' },
    ],
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
    name: 'getWeightedPoolDynamicData',
    outputs: [
      {
        name: 'data',
        internalType: 'struct WeightedPoolDynamicData',
        type: 'tuple',
        components: [
          {
            name: 'balancesLiveScaled18',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'tokenRates', internalType: 'uint256[]', type: 'uint256[]' },
          {
            name: 'staticSwapFeePercentage',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
          { name: 'isPoolInitialized', internalType: 'bool', type: 'bool' },
          { name: 'isPoolPaused', internalType: 'bool', type: 'bool' },
          { name: 'isPoolInRecoveryMode', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getWeightedPoolImmutableData',
    outputs: [
      {
        name: 'data',
        internalType: 'struct WeightedPoolImmutableData',
        type: 'tuple',
        components: [
          {
            name: 'tokens',
            internalType: 'contract IERC20[]',
            type: 'address[]',
          },
          {
            name: 'decimalScalingFactors',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          {
            name: 'normalizedWeights',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'incrementNonce',
    outputs: [],
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
      {
        name: 'request',
        internalType: 'struct PoolSwapParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'enum SwapKind', type: 'uint8' },
          {
            name: 'amountGivenScaled18',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'balancesScaled18',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'indexIn', internalType: 'uint256', type: 'uint256' },
          { name: 'indexOut', internalType: 'uint256', type: 'uint256' },
          { name: 'router', internalType: 'address', type: 'address' },
          { name: 'userData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'onSwap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
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
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
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
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
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
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const bmiTokenAddress = {
  8453: '0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const bmiTokenConfig = {
  address: bmiTokenAddress,
  abi: bmiTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IndexFund
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const indexFundAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sharesToRedeem', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'userShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const indexFundAddress = {
  8453: '0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const indexFundConfig = {
  address: indexFundAddress,
  abi: indexFundAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiToken = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"PERMIT_TYPEHASH"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenPermitTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'PERMIT_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"computeBalance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenComputeBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'computeBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"computeInvariant"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenComputeInvariant =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'computeInvariant',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenEip712Domain = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'eip712Domain',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getAggregateFeePercentages"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetAggregateFeePercentages =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getAggregateFeePercentages',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getCurrentLiveBalances"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetCurrentLiveBalances =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getCurrentLiveBalances',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getMaximumInvariantRatio"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetMaximumInvariantRatio =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getMaximumInvariantRatio',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getMaximumSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetMaximumSwapFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getMaximumSwapFeePercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getMinimumInvariantRatio"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetMinimumInvariantRatio =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getMinimumInvariantRatio',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getMinimumSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetMinimumSwapFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getMinimumSwapFeePercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getNormalizedWeights"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetNormalizedWeights =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getNormalizedWeights',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetRate = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getRate',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getStaticSwapFeePercentage"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetStaticSwapFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getStaticSwapFeePercentage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getTokenInfo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetTokenInfo = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getTokenInfo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getTokens"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetTokens = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getTokens',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getVault"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetVault = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'getVault',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getWeightedPoolDynamicData"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetWeightedPoolDynamicData =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getWeightedPoolDynamicData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"getWeightedPoolImmutableData"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenGetWeightedPoolImmutableData =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'getWeightedPoolImmutableData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenName = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"onSwap"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenOnSwap = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'onSwap',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"version"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useReadBmiTokenVersion = /*#__PURE__*/ createUseReadContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'version',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiToken = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"emitApproval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiTokenEmitApproval =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'emitApproval',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"emitTransfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiTokenEmitTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'emitTransfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"incrementNonce"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiTokenIncrementNonce =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'incrementNonce',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWriteBmiTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useSimulateBmiToken = /*#__PURE__*/ createUseSimulateContract({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useSimulateBmiTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"emitApproval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useSimulateBmiTokenEmitApproval =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'emitApproval',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"emitTransfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useSimulateBmiTokenEmitTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'emitTransfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"incrementNonce"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useSimulateBmiTokenIncrementNonce =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'incrementNonce',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"permit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useSimulateBmiTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link bmiTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
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
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useSimulateBmiTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWatchBmiTokenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: bmiTokenAbi,
  address: bmiTokenAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWatchBmiTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
 */
export const useWatchBmiTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: bmiTokenAbi,
    address: bmiTokenAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link bmiTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc)
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
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useReadIndexFund = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"userShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useReadIndexFundUserShares = /*#__PURE__*/ createUseReadContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'userShares',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useWriteIndexFund = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useWriteIndexFundMint = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useWriteIndexFundRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: indexFundAbi,
  address: indexFundAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useSimulateIndexFund = /*#__PURE__*/ createUseSimulateContract({
  abi: indexFundAbi,
  address: indexFundAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useSimulateIndexFundMint = /*#__PURE__*/ createUseSimulateContract(
  { abi: indexFundAbi, address: indexFundAddress, functionName: 'mint' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link indexFundAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF)
 */
export const useSimulateIndexFundRedeem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: indexFundAbi,
    address: indexFundAddress,
    functionName: 'redeem',
  })
