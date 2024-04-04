import css from './Profile.module.css';


export default function Profile ({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.stats} >
        <li className={css.statsItem}>
          <span className={css.statsText}>Followers</span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsText}>Views</span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsText}>Likes</span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}