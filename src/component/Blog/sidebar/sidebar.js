import React, { useState, useEffect } from "react";
import "./sidebar.css";
// import blogPost from "../../../data/blog.json";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Sidebar
 **/

const Sidebar = ({ posts }) => {
 
  const categories = [];
  posts.filter((data) => {
      if (data.cat) {
       return  categories.push(data.cat);
      }
      else return null
    }, []);
  const categoriesSet = [...new Set(categories)];



  return (
    <>
      <div className="widget widget-peru-posts-thumb">
        <h3 className="widget-title">Popular Posts</h3>
        <div className="post-wrap">
          <div className="item">
            {posts.slice(0, 5).map((post) => {
              return (
                <>
                <div className="info mb-2">
                  {/* <Link key={post.id} to={`/post/${post.slug}`}> */}
                  <Link
                    key={post.slug}
                    to={{
                      pathname: `/blog/${post.slug}`,
                      state: { post, posts },
                    }}
                  >
                    <span>{post.created}</span>
                    <h4 className="title usmall">{post.title}</h4>
                  </Link>
                </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="widget widget-peru-posts-thumb">
        <h3 className="widget-title">Categories</h3>
        <div className="post-wrap">
          <div className="item">
            {categoriesSet.map((category) => {
              return (
                <div className="info">
                  <h4 className="title usmall mb-2">{category} </h4>
                  {/* <Link key={post.id} to={`/post/${post.slug}`}> */}
                  {/* <Link
                    key={catego.slug}
                    to={{
                      pathname: `/blog/${post.slug}`,
                      state: { post, posts }
                    }}
                  >
                    <h4 className="title usmall">{post.cat} </h4>
                  </Link> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
