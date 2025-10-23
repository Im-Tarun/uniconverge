import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes("@")) {
      alert("Please enter valid data.");
      return;
    }
    const newUser = { id: Date.now(), ...form, company: { name: form.company } };

    const stored = JSON.parse(localStorage.getItem("addedUsers")) || [];
    localStorage.setItem("addedUsers", JSON.stringify([...stored, newUser]));

    alert("User added successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {["name", "email", "phone", "company"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:ring focus:ring-blue-300"
          />
        ))}
        <button
          type="submit"
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
