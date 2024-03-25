export default function FriendsList({ friends, selectedFriend }) {
  function onFriendSelected(friend) {
    selectedFriend(friend);
  }

  return (
    <div className="mt-10 border-2 border-gray-400 p-3">
      <h2 class="mb-2 text-lg font-semibold text-gray-900 ">
        Friends Details:
      </h2>
      <ol class="max-w-md space-y-1 text-black list-decimal list-inside ">
        {friends.map((friend) => (
          <li key={friend.id}>
            <span class="font-semibold text-gray-900 ">
              {friend.name}
              <button
                onClick={() => onFriendSelected(friend)}
                className="text-blue-500 underline ml-5 cursor-pointer"
              >
                See Details
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
