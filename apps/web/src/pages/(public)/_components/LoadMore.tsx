import React, { useState, useEffect } from "react";

export default function LoadMore() {
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(3);
  
    const loopWithSlice = (start, end) => {
      const slicedPosts = posts.slice(start, end);
      arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
      setPostsToShow(arrayForHoldingPosts);
    };
  
    useEffect(() => {
      loopWithSlice(0, postsPerPage);
    }, []);
  
    const handleShowMorePosts = () => {
      loopWithSlice(next, next + postsPerPage);
      setNext(next + postsPerPage);
    };
  return (
    <div>
      
    </div>
  )
}
