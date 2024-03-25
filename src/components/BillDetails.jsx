export default function BillDetails({ friend }) {
  return (
    <div className="mt-10 border-2 border-gray-400 p-3 min-w-screen">
      <ul>
        {friend.billDetails.map((bill) => (
          <>
            <h3 className="flex">
              <span className="font-bold">{bill.name} </span> pays the bill
            </h3>
            <li key={bill.friendId}>
              You need to pay ${bill.price} to{' '}
              <span className="font-bold">{bill.name}</span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
