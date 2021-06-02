import './starBadgeStyle.css';

export const StarsBadge = ({ stars }) => {
  return (
    <div className='star-wrapper'>
      {stars.map((name, i) => (
        <span key={i} className='star-badge'>
          {name}
        </span>
      ))}
    </div>
  );
};
