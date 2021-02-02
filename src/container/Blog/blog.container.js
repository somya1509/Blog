import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Blog/sidebar/sidebar";
import "./blog.container.css";
import BlogPost from "../../component/Blog/Blogpost/blogpost";
import Pagination from "../../component/Blog/pagination/pagination";

/**
 * @author
 * @function BlogContainer
 **/

const BlogContainer = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  // useEffect(() => {
  //   const posts = blogPost.data;
  //   setPosts(posts);
  // }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => { 
        console.log(data);
        setPosts(data);
      })
  }, []);
 
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container-fluid">
        <div className="row post-row">
          <div className="col-lg-8 col-sm-12 blog-post">
            <BlogPost posts={currentPosts} />
          </div>
          <div className="col-lg-4 col-sm-12 side-bar">
            <Sidebar posts={posts}  />
          </div>
        </div>

        <div className="row pagination-row">
          <div className="col-lg-12">
            <Pagination
              postPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContainer;
