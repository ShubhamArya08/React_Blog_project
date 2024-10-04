import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import "./App.css";

export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 items-center justify-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
