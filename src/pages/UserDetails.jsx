import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";

const UserDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get(`/users/${id}`).then((res) => setUser(res.data));
    }, [id]);

    if (!user) return <p>Loading user details...</p>;

    return (
        <div className="max-w-md mx-auto bg-green-200  p-4 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Address:</strong> {user.address?.city}</p>
            <button
                onClick={() => navigate(-1)}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600">
                Back
            </button>
        </div>
    );
};

export default UserDetailsPage;
