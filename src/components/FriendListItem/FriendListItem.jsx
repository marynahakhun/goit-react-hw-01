import clsx from "clsx"
import css from "./FriendListItem.module.css"
export default function FriendListItem({ avatar, name, isOnline }) {
   
    const onlineClass = clsx(
        css.status,
        { [css.online]: isOnline },
        { [css.offline]: !isOnline } )
    return <div>
        <img src={avatar} alt="Avatar" width="130" />
        <p className={css.name}>{name }</p>
        <p className={onlineClass} >{isOnline ? "Online" : "Offline"}</p>
    </div>
}