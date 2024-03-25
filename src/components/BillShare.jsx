import { useState } from 'react';
import Button from './Button';
import { toast } from 'react-toastify';

export default function BillShare({ friends, onBillPaid }) {
  const [bill, setBill] = useState('');
  const [friend, setFriend] = useState('');

  function submitBill(event) {
    event.preventDefault();
    const singleFriend = friends.find((fr) => +friend === +fr.id);
    const billDetails = { friendId: friend, name: singleFriend.name, bill };
    onBillPaid(billDetails);
  }

  const handleClick = () => {
    toast.success(
      'Bill Added. Please Click on See Details to View Details of divided bill'
    );
  };
  return (
    <div>
      <div className="text-xl font-black text-gray-900">Bill Details</div>
      <form onSubmit={submitBill}>
        <div className="border-2 border-gray-400 p-3">
          <label
            for="bill"
            className="block mb-2 text-sm font-medium text-gray-900  border-b-2 border-black"
          >
            Select Friend who paid the bill
          </label>
          <select
            className="mb-3 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
          >
            <option value="">Select Friend</option>
            {friends.map((friend) => (
              <option value={friend.id} key={friend.id}>
                {friend.name}
              </option>
            ))}
          </select>
          <div>
            <label
              for="bill"
              className="block mb-2 text-sm font-medium text-gray-900  border-b-2 border-black"
            >
              Total bill amount
            </label>
            <input
              type="number"
              value={bill}
              className="mb-3 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
          <div>
            <Button onClick={handleClick}>Add Bill</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
