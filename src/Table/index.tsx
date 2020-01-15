import React, {useCallback} from 'react';

import styles from './styles.module.scss';
import {CoinData} from "../api/types";

export type TableProps = {
    headerData: string[];
    rowsData: CoinData[];
}

export const CoinsCapTable: React.FC<TableProps> = (props) => {
    const { rowsData, headerData } = props;

    const renderHeaderRow = useCallback(() => {
        return (
            <tr>
                <th className={styles.TableHeader}>N#</th>
                <th className={styles.TableHeader}>{headerData[0]}</th>
                <th className={styles.TableHeader}>{headerData[1]}</th>
                <th className={`${styles.TableHeader} ${styles.TableRowMobileHidden}`}>{headerData[2]}</th>
                <th className={`${styles.TableHeader} ${styles.TableRowMobileHidden}`}>{headerData[3]}</th>
            </tr>
        )
    }, [headerData]);

    const renderRows = useCallback(() => rowsData.map((row, index) => (
        (
            <tr className={styles.TableRow} key={row.id}>
                <td className={styles.TableCell}>{index}</td>
                <td className={styles.TableCell}>{row.name}</td>
                <td className={styles.TableCell}>{row.price}</td>
                <td className={`${styles.TableCell} ${styles.TableRowMobileHidden}`}>{row.marketCap}</td>
                <td className={`${styles.TableCell} ${styles.TableRowMobileHidden}`}>{row.dayVolume}</td>
            </tr>
        )
    )), [rowsData]);

    return (
        <div className={styles.Container}>
            <table >
                <thead className={styles.TableHead}>
                    {renderHeaderRow()}
                </thead>
                <tbody className={styles.TableBody}>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
};