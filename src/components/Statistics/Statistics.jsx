import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h3 className={style.title}>{title}</h3>}

      <ul className={style.list}>
        {stats.map((item, index) => (
          <li className={style.item} key={item.id}>
            <StatisticsItem
              title={item.title}
              total={item.total}
              icon={icons[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
