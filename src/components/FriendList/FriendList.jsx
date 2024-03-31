import css from "../FriendList/Friend.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"
export default function FriendList({ friends }) {
    return <div>
        <ul className={css.friendsList}>
         
            {friends.map((friend) => (
                <li className={css.friendsItem} key={friend.id}>
                    <FriendListItem  avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
                   </li>
               ))}
       
        </ul>
      </div>
}