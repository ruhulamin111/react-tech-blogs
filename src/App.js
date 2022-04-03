import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createContext } from "react";

export const BlogContext = createContext();

function App() {
  return <Navbar />;
}

export default App;
