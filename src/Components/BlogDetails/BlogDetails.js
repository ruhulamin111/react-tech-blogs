import React, { useContext } from "react";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";
import { TechGeeks } from "../../App";
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const [blogs] = useContext(TechGeeks);
  const { id } = useParams();
  const blog = blogs.find(blog => blog._id === id)
  const navigate = useNavigate();


  return (
    <>
      <div className='header-gradient' />
      <div>
        <button className='back-button' onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
