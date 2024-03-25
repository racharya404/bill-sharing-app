import { useState } from 'react';
import Button from './Button';

export default function AddFriend({ onAddFriend }) {
  const [name, setName] = useState('');

  function addFriend(event) {
    event.preventDefault();
    onAddFriend(name);
    setName('');
  }
  return (
    <div>
      <form onSubmit={addFriend}>
        <div className="text-xl font-black text-gray-900">
          Name all the friend gathered.
        </div>
        <div className="border-2 border-gray-400 p-3">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900  border-b-2 border-black"
            >
              Add Friends
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="mb-3 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Rojan Acharya"
              required
            />
          </div>
          <div>
            <Button>Add Friend</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
