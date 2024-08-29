import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./features/authslice";
import { Footer, Header } from "./components";


function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useState(() => {
    authService
      .getcurrentuser()
      .then((data) => {
        if (data) {
          dispatch(logout(data));
        } else {
          dispatch(logout);
        }
      })
      .finally(() => setloading(false));
  }, []);

  return !loading ? (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
