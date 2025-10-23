import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/users/${user.id}`}
      className="block p-4 bg-green-200 rounded-lg shadow-sm hover:scale-98 active:scale-103 transition"
    >
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="text-gray-500 text-sm">{user.company?.name}</p>
    </Link>
  );
};

export default UserCard;
