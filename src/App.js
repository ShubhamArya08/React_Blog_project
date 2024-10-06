import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import "./App.css";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()


  useEffect(() => {
    const page = searchParams.get("page") ?? 1
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1)
    }
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
};

export default App;
