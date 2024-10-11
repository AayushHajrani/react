import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const Home = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setpost(data));
  }, []);

  return (
    <div>
      <div>
        {post.map((post) => (
          <NavLink style={{ display: "block" }} to={`/post/${post.id}`}>
            {post.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const User = () => {
  const params = useParams();
  return (
    <div>
      <h1>your name is {params.userid}</h1>
    </div>
  );
};

const Posts = () => {

  const params = useParams()
  console.log(params);
  
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userid" element={<User />} />
        <Route path="/post/:postId" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
