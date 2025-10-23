import { useEffect, useState } from "react";
import { api } from "../services/api";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsersdata = async () => {
    try {
        const {data} = await api.get("/users")
        const storedUsers = JSON.parse(localStorage.getItem("addedUsers")) || [];
        const allUsers = [...data, ...storedUsers];
        setUsers(allUsers);
        setFiltered(allUsers);
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getUsersdata()
  }, []);

  const handleSearch = (query) => {
    setFiltered(
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(query.toLowerCase()) ||
          u.email.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="px-8">
      <SearchBar onSearch={handleSearch} />
      {filtered.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
