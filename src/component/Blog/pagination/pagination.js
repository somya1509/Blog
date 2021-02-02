import React from "react";
import "./pagination.css";
/**
 * @author
 * @function Pagination
 **/

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    
      <div class="page-navigation-area">
        <ul class="pagination">
          {
            pageNumber.map((number) => (
            <li class="page-item" key={number}>
              <a
                class="page-link page-links"
                href="#!"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
 
  );
};

export default Pagination;
