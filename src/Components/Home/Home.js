import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);

  return (
    <div className='blogs-container'>
      {
        blogs.map((blog, index) => (<Blog key={index} blog={blog} />))
      }
    </div>
  );
};

export default Home;
