'use client'
import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";
import Pagination from './Pagination'
import Posts from './Posts'
import axios from 'axios';
import { useState,useEffect } from "react";

const AppBar = () => {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(10);
  useEffect(()=>{
    const fetchPosts=async()=>{
      setLoading(true);
      const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);

    }
    fetchPosts();
  },[]);
//console.log(posts);
//Get current posts
const indexofLastPost=currentPage*postsPerPage;
const indexofirstPost=indexofLastPost-postsPerPage;
const currentPosts=posts.slice(indexofirstPost,indexofLastPost);
//Change Page
const paginate=(pageNumber)=>setCurrentPage(pageNumber);
  return (
    <div>
    <header className="container2">
      <Link className="transition-colors hover:text-blue-500" href={"/"}>
        Home Page
      </Link>
      <Link className="transition-colors hover:text-blue-500" href={"/UserPost"}>
        User Post Page
      </Link>
      <SigninButton />
    </header>
    <div className="container mt-5 p-5">
    <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

    </div>
    </div>
  );
};

export default AppBar;