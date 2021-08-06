import { useEffect, useState } from "react"
import { getBlogPosts } from '../client'

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  // holds the current loading state for the blog posts fetch request
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then(blogPosts => {
      setPosts(blogPosts);
      // after updating the posts state variable with the new blog posts loading state is set to false
      setLoading(false);
    });
}, []);

  return [posts, isLoading];
};

