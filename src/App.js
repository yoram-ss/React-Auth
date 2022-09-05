import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) return <Login setToken={setToken} />;

  return (
    <BrowserRouter>
      <div className="flex-center">
        <h1>Dashboard</h1>
        <p>Welcome back, you are login</p>
        <Routes>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
