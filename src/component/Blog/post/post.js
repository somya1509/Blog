import React, { useEffect, useState } from "react";
import "./post.css";
import Sidebar from "../sidebar/sidebar";
// import blogPost from "../../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Post
 **/
// function findPostBySlug(slug) {
//   return blogPost.data.find((o) => o.slug === slug);

// }

const Post = (props) => {
  // const [slug, setSlug] = useState({});
  
//  const [post,setPost] = useState([]);
//   // var { slug } = useParams(),
//   //   post = findPostBySlug(slug);
  const {post , posts} = props.location.state;

//   useEffect(()=>{
//     console.log("Hello0000", posts)
//     setPost(Object.entries(posts));
//   },[posts]);

  return (
    
      <div className="container">
        <div className="row post-container">
          <div className="col-lg-8 col-md-12">
          <NavLink to="/" className="back-icon">
             <i class="fa fa-arrow-left">Back</i>
          </NavLink>
            <div className="blog-details-desc">
              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <span>Posted On:</span>
                      {post.created}
                    </li>
                    <li>
                      <span>Posted By: Admin</span>
                    </li>
                  </ul>
                </div>
                <h2 style={{"margin-top": '10px'}} className="">{post.title}</h2>
                <div style={{"margin-top": '10px'}}  dangerouslySetInnerHTML={{ __html: post.body }} />
              </div>

              {/* <div className="post-navigation">
                <div className="navigation-as">
                  <div className="nav-previous">
                    <i className="bx bx-left-arrow-alt"></i> Prev Post
                  </div>
                  <div className="nav-next">
                    Next Post <i className="bx bx-right-arrow-alt"></i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="blog-right-sidebar">
              <Sidebar posts={posts}/> 
            </div>
          </div>
        </div>
      </div>
  );
};

export default Post;
