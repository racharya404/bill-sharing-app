import { useState } from 'react';
import './App.css';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState('');

  function addFriend(name) {
    setFriends((friends) => [
      ...friends,
      { id: Date.now(), name, billDetails: [] },
    ]);
  }

  function onFriendSelected(friend) {
    setSelectedFriend(friend);
  }
  return (
    <>
      <AddFriend onAddFriend={addFriend} />
      <FriendsList friends={friends} selectedFriend={onFriendSelected} />
    </>
  );
}

export default App;
