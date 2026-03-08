import { useEffect, useState } from "react";
import axios from 'axios';
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND}/api/auth/me`, {
      withCredentials: true,
    })
      .then(res => setUser(res.data.user))
      .catch(() => window.location.href = `${process.env.REACT_APP_FRONTEND}`);
  }, []);
  if (!user) return <div>Loading...</div>;
  localStorage.setItem('user_id', user._id);
  return (
    <>
      <TopBar user={user} />
      <Dashboard />
    </>
  );
};

export default Home;
