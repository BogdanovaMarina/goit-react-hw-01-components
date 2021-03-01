import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>Upload stats</h2>}
        <ul className={s.statList}>
          {stats.map(el => {
            const { id, label, percentage } = el;
            return (
              <li
                className={s.item}
                key={id}
                style={{
                  backgroundColor: getRandomColor(),
                }}
              >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
          {/* <li className="item">
						<span className="label">.mp3</span>
						<span className="percentage">14%</span>
					</li>
					<li className="item">
						<span className="label">.pdf</span>
						<span className="percentage">41%</span>
					</li>
					<li className="item">
						<span className="label">.mp4</span>
						<span className="percentage">12%</span>
					</li> */}
        </ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.dafaultProps = {
  title: 'string',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
