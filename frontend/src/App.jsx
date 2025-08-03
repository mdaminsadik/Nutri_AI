import Signup from "./componentt/signup/signup";
import Login from "./component2/Login";
import Design from "./Design";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav className="bg-orange-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">Fooder</div>
        <div className="space-x-6">
          <Link
            className="hover:text-orange-200 transition-colors font-medium"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="hover:text-orange-200 transition-colors font-medium"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      </nav>

      <div className="bg-gray-50 min-h-screen py-8">
        {/* <img src="/food1.jpg" alt="food" className="absolute inset-0 w-full h-100vh object-cover opacity-20 z-0 "></img> */}
        <img src="/food2.jpg" alt="food" className="absolute top-20 left-4 w-54 h-54 object-cover rounded-lg shadow-lg" />
        <img src="/food3.jpg" alt="food" className="absolute top-20 right-4 w-54 h-54 object-cover rounded-lg shadow-lg" />
        <img src="/food4.webp" alt="food" className="absolute bottom-4 left-4 w-54 h-54 object-cover rounded-lg shadow-lg" />
        <img src="/food5.jpg" alt="food" className="absolute bottom-4 right-4 w-54 h-54 object-cover rounded-lg shadow-lg" />




        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">

          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <design></design>
        </div>
      </div>
    </Router>
  );
};

export default App;

