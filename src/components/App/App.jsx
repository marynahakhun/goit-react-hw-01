import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../transactions.json"
import friends from "../friends.json"
import Profile from "../Profile/Profile";
import  userData from "../userData.json"







const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </>
  );
};
export default App