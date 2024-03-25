import { useState } from 'react';
import './App.css';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import BillShare from './components/BillShare';
import BillDetails from './components/BillDetails';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState('');

  function addFriend(name) {
    setFriends((friends) => [
      ...friends,
      { id: Date.now(), name, billDetails: [] },
    ]);
  }

  function onBillPaid(billDetails) {
    setFriends((friends) => calculateBill(friends, billDetails));
  }

  function onFriendSelected(friend) {
    setSelectedFriend(friend);
  }

  function calculateBill(friends, billDetails) {
    const amountPrice = Math.round(+billDetails.bill / friends.length);
    const friendDetails = [];

    for (let friend of friends) {
      const singleFriend = { ...friend };
      if (singleFriend.id === +billDetails.friendId) {
        friendDetails.push(singleFriend);
        continue;
      }

      const billings = [];
      let found = false;

      if (singleFriend.billDetails.length) {
        for (var billing of singleFriend.billDetails) {
          if (billing.id === billDetails.friendId) {
            found = true;
            billings.push({
              ...billing,
              ...{ price: billing.price + amountPrice },
            });
          } else {
            billings.push(billing);
          }
        }
      }

      if (!found) {
        billings.push({
          id: billDetails.friendId,
          name: billDetails.name,
          price: +amountPrice,
        });
      }

      singleFriend['billDetails'] = billings;
      friendDetails.push(singleFriend);
    }

    return friendDetails;
  }
  return (
    <div className="grid grid-cols-2 gap-5 px-5">
      <div>
        <AddFriend onAddFriend={addFriend} />
        <FriendsList friends={friends} selectedFriend={onFriendSelected} />
      </div>
      <div>
        <BillShare friends={friends} onBillPaid={onBillPaid} />
        {selectedFriend && <BillDetails friend={selectedFriend} />}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
