import yVaultV2 from './abi/yVaultV2.json'
import LidoVault from './abi/LidoVault.json'

// Main config file for common parameters
export default Object.freeze({
    'yusdcidle' : { // route path
        TITLE: "USDc Idle",
        LOGO: "🏆🚀",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x33bd0f9618cf38fea8f7f01e1514ab63b9bde64b",
        WANT_ADDR: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        WANT_SYMBOL: "USDC",
        COINGECKO_SYMBOL: "usd-coin",
        VAULT_DEV : "emilianobonassi",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'devhugger' : {
        TITLE: "DEV Hugger",
        LOGO: "👾🤗",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xFeD651936Af7e98F7F2A93c03B1E28a2DA7dfaD4",
        WANT_ADDR: "0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
        WANT_SYMBOL: "DEV",
        COINGECKO_SYMBOL: "dev",
        VAULT_DEV : "devprtcl",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "withdraw",
    },
    'apetrumpet' : {
        TITLE: "apeTrump(et)",
        LOGO: "🦧🎺",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'experiment',
        VAULT_ADDR: "0xba81fb02d5e7b94b341e82d1959c372590b852be",
        WANT_ADDR: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        WANT_SYMBOL: "nTrump",
        COINGECKO_SYMBOL: "nTrump",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'icecreath2' : {
        TITLE: "iceCREATH2",
        LOGO: "🍦TH2",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x20Eb2A369b71C29FC4aFCddBbc1CAB66CCfcB062",
        WANT_ADDR: "0xcBc1065255cBc3aB41a6868c22d1f1C573AB89fd",
        WANT_SYMBOL: "CRETH2",
        COINGECKO_SYMBOL: "CRETH2",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "withdraw",
    },
    'zzzvault' : {
        TITLE: "zLOT yVault",
        LOGO: "💤🌖",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xCA6C9fB742071044247298Ea0dBd60b77586e1E8",
        WANT_ADDR: "0xA8e7AD77C60eE6f30BaC54E2E7c0617Bd7B5A03E",
        WANT_SYMBOL: "zLOT",
        COINGECKO_SYMBOL: "zLOT",
        VAULT_DEV : "macarse",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "withdraw",
    },
    'sushirocket' : {
        TITLE: "yvSushi YFI-ETH",
        LOGO: "🍣🍬",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x27Eb83254D900AB4F9b15d5652d913963FeC35e3",
        WANT_ADDR: "0x088ee5007C98a9677165D78dD2109AE4a3D04d0C",
        WANT_SYMBOL: "SLP",
        COINGECKO_SYMBOL: "SLP",
        VAULT_DEV : "andy8052",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'daihard' : {
        TITLE: "DAI Hard yVault",
        LOGO: "🏅💪",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xBFa4D8AA6d8a379aBFe7793399D3DdaCC5bBECBB",
        WANT_ADDR: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        WANT_SYMBOL: "DAI",
        COINGECKO_SYMBOL: "DAI",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "withdraw",
    },
    'usdc' : {
        TITLE: "USd Coin yVault",
        LOGO: "🇺🇸🪙",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xe2f6b9773bf3a015e2aa70741bde1498bdb9425b",
        WANT_ADDR: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        WANT_SYMBOL: "USDC",
        COINGECKO_SYMBOL: "USDC",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "withdraw",
    },
    'yvsteth' : {
        TITLE: "Lido St. Ether Vault",
        LOGO: "👼🏦",
        VAULT_ABI: LidoVault,
        VAULT_TYPE: 'experiment',
        VAULT_ADDR: "0x15a2B3CfaFd696e1C783FE99eed168b78a3A371e",
        WANT_ADDR: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        WANT_SYMBOL: "stETH",
        COINGECKO_SYMBOL: "staked-ether",
        VAULT_DEV : "bantg",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'daiironbank' : {
        TITLE: "DAI Ironbank",
        LOGO: "🦾🏦",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x07dbC20B84fF63F3cc542F6A22E5a71cbA5670A4",
        WANT_ADDR: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        WANT_SYMBOL: "DAI",
        COINGECKO_SYMBOL: "dai",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "withdraw",
    },
    'wethmaker' : {
        TITLE: "WETH Maker",
        LOGO: "🖲🏰",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x6392e8fa0588CB2DCb7aF557FdC9D10FDe48A325",
        WANT_ADDR: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        WANT_SYMBOL: "WETH",
        COINGECKO_SYMBOL: "WETH",
        VAULT_DEV : "orbxball",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "withdraw",
    },
    'stecrv' : {
        TITLE: "st. Ether-ETH Pool",
        LOGO: "💧🎱",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
        WANT_ADDR: "0x06325440D014e39736583c165C2963BA99fAf14E",
        WANT_SYMBOL: "steCRV",
        COINGECKO_SYMBOL: "ethereum",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'ironlender' : {
        TITLE: "WETH Iron Lender",
        LOGO: "🦾💰",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xED0244B688cF059f32f45E38A6ac6E479D6755f6",
        WANT_ADDR: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        WANT_SYMBOL: "WETH",
        COINGECKO_SYMBOL: "ethereum",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'mmwbtc' : {
        TITLE: "Mushroom Worker",
        LOGO: "🍄🧑‍🌾",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'experiment',
        VAULT_ADDR: "0x0e8A7717A4FD7694682E7005957dD5d7598bF14A",
        WANT_ADDR: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        WANT_SYMBOL: "WBTC",
        COINGECKO_SYMBOL: "wrapped-bitcoin",
        VAULT_DEV : "mushroomsfinan1",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'ecrvseth' : {
        TITLE: "Egyptian God sETH/ETH",
        LOGO: "𓀀☀︎",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x0e880118C29F095143dDA28e64d95333A9e75A47",
        WANT_ADDR: "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
        WANT_SYMBOL: "eCRV",
        COINGECKO_SYMBOL: "ethereum",
        VAULT_DEV : "matkam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'wethgenlender': {
        TITLE: "WETH Gen Lender",
        LOGO: "🧬💰",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xac333895ce1a73875cf7b4ecdc5a743c12f3d82b",
        WANT_ADDR: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        WANT_SYMBOL: "WETH",
        COINGECKO_SYMBOL: "ethereum",
        VAULT_DEV : "arbingsam",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active", 
    },
    'susdidle': {
        TITLE: "sUSD Idle",
        LOGO: "🏆⚔️",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x3466c90017F82DDA939B01E8DBd9b0f97AEF8DfC",
        WANT_ADDR: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
        WANT_SYMBOL: "sUSD",
        COINGECKO_SYMBOL: "nusd",
        VAULT_DEV : "emilianobonassi",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active", 
    },
})
