import clsx from "clsx";
import css from "./Profile.module.css"
export default function Profile({ name, tag, location, image, stats }) {
    const { followers, views, likes } = stats;
      const mainDataClass = clsx({
        [css.info]: true,
        [css.main]: true,
    });
    const secondaryDataClass = clsx({
        [css.info]: true,
        [css.secondary]: true,
    });
    
    return <div className={css.profile}>
        <div>
            <img className={css.image} src={image} width="300" alt="profile image" />
            <p  className={mainDataClass}>{ name}</p>
            <p  className={secondaryDataClass}>@{ tag}</p>
            <p className={secondaryDataClass}>{location} </p>
        </div>
        <ul className={css.stat}>
          <li className={css.stats}>
      <span>Followers </span>
      <span>{followers}</span>
    </li>
    <li className={css.stats}>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li className={css.stats}>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
        </ul>
       
    </div>
}