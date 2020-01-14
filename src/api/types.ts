export type CoinApiData = {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
}

export type AssetsApiData = {
    data: CoinApiData[],
    timestamp: number;
}

export type CoinData = {
    id: string;
    name: string;
    price: string;
    marketCap: string;
    dayVolume: string;
}

export type AssetsData = {
    data: CoinData[],
    timestamp: number;
}