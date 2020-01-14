import React from 'react';
import styles from './App.module.scss';
import {CoinsCapTable} from "./Table";
import {useCoinsApi} from "./api/use-coins-api";

const App: React.FC = () => {
    const { data } = useCoinsApi();

    return (
        <div className={styles.App}>
            <CoinsCapTable headerData={
                [
                    'Name',
                    'Price',
                    'Market Cap',
                    'Volume(24 Hr)',
                ]
            } rowsData={data}/>
        </div>
    );
};

export default App;
