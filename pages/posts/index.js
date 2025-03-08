import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const router = useRouter();

  const getPostsData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await response.json();
    setAllPosts(postsData);
  };

  const openList = (id) => {
    router.push(`posts/${id}`);
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div>
      <h1>List of posts {allPosts.length}</h1>
      <ul>
        {allPosts &&
          allPosts.map((item) => {
            return (
              <li key={item.id} onClick={() => openList(item.id)}>
                {item.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AllPosts;
