import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const AllPosts = (props) => {
  const { allPosts } = props;

    // const [allPosts, setAllPosts] = useState([]);
    const [searchItem, setSearchItem] = useState('');
  const router = useRouter();

  //   const getPostsData = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const postsData = await response.json();
  //     setAllPosts(postsData);
  //   };

  let timer = useRef(null);
  const debouncedInput = (cbFunc) => {
      return function(...args){
        if (timer.current){
          clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
          cbFunc(...args);
        }, 1000)
      }
  };

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const openList = (id) => {
    router.push(`posts/${id}`);
  };

  const handleSearch = debouncedInput((e) => {
    setSearchItem(e.target.value)
    console.log('hi');
    
  })

  console.log(searchItem);
  

  //   useEffect(() => {
  //     getPostsData();
  //   }, []);

  return (
    <div className="w-full h-full flex flex-col items-center lg:whitespace-nowrap">
      <div className="w-full text-[24px] text-center">
        <h1 className="w-full">List of posts - {allPosts.length}</h1>
      </div>

      <div>
      <input
          type="text"
          placeholder="Search posts"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value); 
            handleSearch(e); 
          }}
          className="w-full p-2 my-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="w-full lg:max-w-[80%] p-5">
        <h2 className="my-5 text-[18px] text-center underline italic">
          Please select any title to navigate
        </h2>
        <ul className="w-full flex flex-col gap-2 px-10 list-decimal capitalize">
          {filteredPosts.length > 0 &&
            filteredPosts.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => openList(item.id)}
                  className={`cursor-pointer text-[16px] py-4 px-2 font-semibold ${
                    item.id % 2 === 0 ? "text-emerald-500 bg-gray-300" : "text-blue-500 bg-amber-300"
                  }`}
                >
                  {item.title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const allPosts = await res.json();
  return {
    props: {
      allPosts,
    },
  };
};

export default AllPosts;
