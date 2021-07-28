import { useEffect, useState } from "react"
import { getSinglePost } from "../client"

export default function useSinglePost(slug) {
  // getSinglePost function is invoked inside the useSinglePost custom hook because we want to pass the slug argument

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getSinglePost(slug).then(result => {
      setPost(result[0].fields);
      setLoading(false);
    });
}, [slug]);

  return [post, isLoading];
};