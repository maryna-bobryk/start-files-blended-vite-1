import style from './StatisticsItem.module.css';

const StatisticsItem = ({ total, title, icon: Icon }) => {
  return (
    <>
      <Icon size={32} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
