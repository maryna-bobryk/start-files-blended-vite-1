import style from './CryptoHistory.module.css';
import { formateDate } from '../../helpers/formDate';

const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={style.tr}>
            <td className={style.td}>{item.id}</td>
            <td className={style.td}>{item.price}</td>
            <td className={style.td}>{item.amount}</td>
            <td className={style.td}>{formateDate(item.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
