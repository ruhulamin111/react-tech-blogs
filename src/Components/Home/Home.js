import React from "react";
import { useContext } from "react";
import { TechGeeks } from "../../App";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, [blogs]);
  const [blogs] = useContext(TechGeeks);

  return (
    <div className='blogs-container'>
      {
        blogs.map((blog, index) => (<Blog key={index} blog={blog} />))
      }
    </div>
  );
};

export default Home;
