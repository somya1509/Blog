import React from "react";
import "./blogpost.css";
import { Link } from "react-router-dom";

/**
 * @author
 * @function BlogPost
 **/

const BlogPost = ({posts}) => {
  return ( 
    <>  
    <div className="row blog-row">
      {
        posts.map(post => {
        return (
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="single-blog">
              <div className="blog-content">
                <ul>
                  <li>{post.created}</li>
                  <li>By Admin</li>
                </ul>
                <Link key={post.userId} to={{
                  pathname:`/${post.userId}`,
                  state:{post , posts}
                }} >
                {/* <Link key={post.slug} to={`/post/${post.slug}`}> */}
                  <h3>{post.title}</h3>
                </Link>
                {/* <div dangerouslySetInnerHTML={{__html : post.content}} /> */}
              </div>
            </div>
          </div>
        );
      })
      }
      </div>
      </>
    
   
  );
};

export default BlogPost;
