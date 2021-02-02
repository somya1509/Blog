import React from "react";

/**
 * @author
 * @function Pagination
 **/

const Pagination = (props) => {
  return (
    <div class="page-navigation-area">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link page-links" href="/blog-grid#">
            <i class="bx bx-chevrons-left"></i>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            <i class="bx bx-chevrons-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
