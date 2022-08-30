import React, { useEffect } from "react";
import { useContext } from "react";
import { TechGeeks } from "../../App";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useContext(TechGeeks);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [setBlogs]);

  return (
    <div className='blogs-container'>
      {
        blogs.map((blog, index) => (<Blog key={index} blog={blog} />))
      }
    </div>
  );
};

export default Home;
