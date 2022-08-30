import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos'
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import { createContext, useEffect, useState } from 'react';

export const TechGeeks = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [blogs]);

  return (
    <div>
      <TechGeeks.Provider value={[blogs, setBlogs]}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
          <Route path='/videos' element={<Videos></Videos>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </TechGeeks.Provider>
    </div>
  );
};

export default App;