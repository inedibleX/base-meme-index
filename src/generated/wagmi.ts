import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OnlyUpFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const onlyUpFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'ExcessiveTaxes' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidFees' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidOwner' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'OnlyDexSetter' },
  { type: 'error', inputs: [], name: 'OnlyFeeManager' },
  { type: 'error', inputs: [], name: 'OnlyUp' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'Salt' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'pool', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'positionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'GoatTokenCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'pool', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'positionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OnlyUpUniPoolCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pair',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'PairCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_reserve0', internalType: 'uint256', type: 'uint256' },
      { name: '_reserve1', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addInitialLiquidity',
    outputs: [{ name: 'positionId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'allPairs',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokens', internalType: 'address[]', type: 'address[]' }],
    name: 'collect',
    outputs: [
      { name: 'amounts', internalType: 'uint256[2][]', type: 'uint256[2][]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_params',
        internalType: 'struct GoatTypes.TokenParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'supply', internalType: 'uint256', type: 'uint256' },
          {
            name: 'maxWinMultiplier',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'buyTax', internalType: 'uint256', type: 'uint256' },
          { name: 'sellTax', internalType: 'uint256', type: 'uint256' },
          { name: 'winChance', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'treasury', internalType: 'address', type: 'address' },
          { name: 'dialogueStyle', internalType: 'string', type: 'string' },
        ],
      },
      { name: '', internalType: 'enum OnlyUpFactory.TokenType', type: 'uint8' },
      { name: '', internalType: 'int24', type: 'int24' },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createToken',
    outputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'pool', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'creatorShare',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dexSetter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeShares',
    outputs: [
      { name: '_treasury', internalType: 'address', type: 'address' },
      { name: '_creatorShare', internalType: 'uint256', type: 'uint256' },
      { name: '_treasuryShare', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'fromDexes',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'constructorArgs', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'generateSalt',
    outputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'getPair',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'getTaxes',
    outputs: [
      { name: 'fromTax', internalType: 'uint256', type: 'uint256' },
      { name: 'toTax', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'graduationMintRatio',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_positionManager',
        internalType: 'contract INonfungiblePositionManager',
        type: 'address',
      },
      { name: '_feeManager', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mainFromTax',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mainToTax',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minWethToGraduate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ownerGraduationMintShare',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'positionInfo',
    outputs: [
      { name: 'creator', internalType: 'address', type: 'address' },
      { name: 'positionId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'positionManager',
    outputs: [
      {
        name: '',
        internalType: 'contract INonfungiblePositionManager',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'constructorArgs', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'predictTokenAddress',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_newDexSetter', internalType: 'address', type: 'address' },
    ],
    name: 'setDexSetter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_treasury', internalType: 'address', type: 'address' },
      { name: '_tradeFee', internalType: 'uint256', type: 'uint256' },
      { name: '_creatorShare', internalType: 'uint256', type: 'uint256' },
      { name: '_treasuryShare', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setFeeShares',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_graduationMintRatio',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setGraduationMintRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_mainFromTax', internalType: 'uint256', type: 'uint256' },
      { name: '_mainToTax', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMainTaxes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_minWethToGraduate', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMinWethToGraduate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_ownerGraduationMintShare',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setOwnerGraduationMintShare',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_dex', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'bool', type: 'bool' },
      { name: '_from', internalType: 'bool', type: 'bool' },
      { name: '_on', internalType: 'bool', type: 'bool' },
    ],
    name: 'setTax',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenPriceBuffer', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setTokenPriceBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'toDexes',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenPriceBuffer',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tradeFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'treasury',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'treasuryShare',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniswapV3Factory',
    outputs: [
      { name: '', internalType: 'contract IUniswapV3Factory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const onlyUpFactoryAddress = {
  8453: '0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const onlyUpFactoryConfig = {
  address: onlyUpFactoryAddress,
  abi: onlyUpFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactory = /*#__PURE__*/ createUseReadContract({
  abi: onlyUpFactoryAbi,
  address: onlyUpFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"allPairs"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryAllPairs = /*#__PURE__*/ createUseReadContract(
  {
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'allPairs',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"creatorShare"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryCreatorShare =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'creatorShare',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"dexSetter"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryDexSetter =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'dexSetter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"feeManager"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryFeeManager =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'feeManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"feeShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryFeeShares =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'feeShares',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"fromDexes"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryFromDexes =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'fromDexes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"generateSalt"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryGenerateSalt =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'generateSalt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"getPair"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryGetPair = /*#__PURE__*/ createUseReadContract({
  abi: onlyUpFactoryAbi,
  address: onlyUpFactoryAddress,
  functionName: 'getPair',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"getTaxes"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryGetTaxes = /*#__PURE__*/ createUseReadContract(
  {
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'getTaxes',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"graduationMintRatio"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryGraduationMintRatio =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'graduationMintRatio',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"mainFromTax"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryMainFromTax =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'mainFromTax',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"mainToTax"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryMainToTax =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'mainToTax',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"minWethToGraduate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryMinWethToGraduate =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'minWethToGraduate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryOwner = /*#__PURE__*/ createUseReadContract({
  abi: onlyUpFactoryAbi,
  address: onlyUpFactoryAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"ownerGraduationMintShare"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryOwnerGraduationMintShare =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'ownerGraduationMintShare',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"positionInfo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryPositionInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'positionInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"positionManager"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryPositionManager =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'positionManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"predictTokenAddress"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryPredictTokenAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'predictTokenAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"toDexes"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryToDexes = /*#__PURE__*/ createUseReadContract({
  abi: onlyUpFactoryAbi,
  address: onlyUpFactoryAddress,
  functionName: 'toDexes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"tokenPriceBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryTokenPriceBuffer =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'tokenPriceBuffer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"tradeFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryTradeFee = /*#__PURE__*/ createUseReadContract(
  {
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'tradeFee',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"treasury"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryTreasury = /*#__PURE__*/ createUseReadContract(
  {
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'treasury',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"treasuryShare"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryTreasuryShare =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'treasuryShare',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"uniswapV3Factory"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useReadOnlyUpFactoryUniswapV3Factory =
  /*#__PURE__*/ createUseReadContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'uniswapV3Factory',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactory = /*#__PURE__*/ createUseWriteContract({
  abi: onlyUpFactoryAbi,
  address: onlyUpFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"addInitialLiquidity"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactoryAddInitialLiquidity =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'addInitialLiquidity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"collect"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactoryCollect =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"createToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactoryCreateToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'createToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactoryInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactoryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setDexSetter"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetDexSetter =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setDexSetter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setFeeShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetFeeShares =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setFeeShares',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setGraduationMintRatio"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetGraduationMintRatio =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setGraduationMintRatio',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setMainTaxes"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetMainTaxes =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setMainTaxes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setMinWethToGraduate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetMinWethToGraduate =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setMinWethToGraduate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setOwnerGraduationMintShare"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetOwnerGraduationMintShare =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setOwnerGraduationMintShare',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setTax"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetTax = /*#__PURE__*/ createUseWriteContract(
  {
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setTax',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setTokenPriceBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactorySetTokenPriceBuffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setTokenPriceBuffer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactoryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWriteOnlyUpFactoryUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactory = /*#__PURE__*/ createUseSimulateContract(
  {
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
  },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"addInitialLiquidity"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactoryAddInitialLiquidity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'addInitialLiquidity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"collect"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactoryCollect =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'collect',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"createToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactoryCreateToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'createToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactoryInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactoryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setDexSetter"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetDexSetter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setDexSetter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setFeeShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetFeeShares =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setFeeShares',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setGraduationMintRatio"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetGraduationMintRatio =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setGraduationMintRatio',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setMainTaxes"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetMainTaxes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setMainTaxes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setMinWethToGraduate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetMinWethToGraduate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setMinWethToGraduate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setOwnerGraduationMintShare"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetOwnerGraduationMintShare =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setOwnerGraduationMintShare',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setTax"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetTax =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setTax',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"setTokenPriceBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactorySetTokenPriceBuffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'setTokenPriceBuffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactoryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useSimulateOnlyUpFactoryUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onlyUpFactoryAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWatchOnlyUpFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `eventName` set to `"GoatTokenCreated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWatchOnlyUpFactoryGoatTokenCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    eventName: 'GoatTokenCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWatchOnlyUpFactoryInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `eventName` set to `"OnlyUpUniPoolCreated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWatchOnlyUpFactoryOnlyUpUniPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    eventName: 'OnlyUpUniPoolCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWatchOnlyUpFactoryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `eventName` set to `"PairCreated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWatchOnlyUpFactoryPairCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    eventName: 'PairCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link onlyUpFactoryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c)
 */
export const useWatchOnlyUpFactoryUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: onlyUpFactoryAbi,
    address: onlyUpFactoryAddress,
    eventName: 'Upgraded',
  })
