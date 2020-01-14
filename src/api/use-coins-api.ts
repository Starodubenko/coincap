import {useEffect, useRef, useState} from "react";
import {AssetsData} from "./types";
import {mapToLocalModel, toDollarPriceString} from "./helper";

export const useCoinsApi = () => {
    const [assetsData, setAssetsData] = useState<AssetsData>({data: [], timestamp: 0});
    const assetsRef = useRef<AssetsData>(assetsData);
    
    useEffect(() => {
        assetsRef.current = assetsData;
    }, [assetsData]);

    useEffect(() => {
        fetch('https://api.coincap.io/v2/assets')
            .then(response => response.json())
            .then(mapToLocalModel)
            .then(setAssetsData)
            .catch(() => {
                debugger;
            });

        const tradeWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');

        tradeWs.onmessage = function (msg) {
            const newData = JSON.parse(msg.data);
            const updatedData = assetsRef.current.data.map(item => {
                const newPrice = newData[item.name.toLowerCase()];

                if (newPrice) {
                    item.price = toDollarPriceString(newPrice);
                }

                return item;
            });

            setAssetsData({
                ...assetsRef.current,
                data: updatedData
            })
        }
    }, [setAssetsData]);

    return assetsData;
};