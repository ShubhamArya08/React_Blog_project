import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step-1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  //data fetching
  async function fetchBlogPosts(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPages(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Error in fetching blogPosts", err); // Corrected 'console.err' to 'console.error'
      setPages(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPages(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPages,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  //step-2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
