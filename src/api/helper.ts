import {AssetsApiData} from "./types";
import numeral from "numeral";

export const toDollarPriceString = (priceNumber: number | string) => {
    return numeral(priceNumber).format('$0,0.00');
};

export const mapToLocalModel = (assetsData: AssetsApiData) => {
    const sortedAssetsData = sortByMarketCap(assetsData).slice(0,15);
    const mappedData = sortedAssetsData.map(apiCoin => ({
        id: apiCoin.id,
        name: apiCoin.name,
        price: toDollarPriceString(apiCoin.priceUsd),
        marketCap: toDollarPriceString(apiCoin.marketCapUsd),
        dayVolume: toDollarPriceString(apiCoin.volumeUsd24Hr),
    }));

    return {
        ...assetsData,
        data: mappedData,
    }
};

export const sortByMarketCap = (assetsApiData: AssetsApiData) => {
    return assetsApiData.data
        .sort((a,b) => Number.parseInt(b.marketCapUsd) - Number.parseInt(a.marketCapUsd))
};