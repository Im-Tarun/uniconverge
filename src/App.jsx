import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import AddUser from "./pages/AddUser.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Global Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="grow p-4 md:p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
