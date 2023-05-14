import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i);
  }

  
  
    return (
   <nav>
    <ul className='pagination d-flex'>
    {pageNumbers.map(number=>(
        <li key={number} className="page-item pt-5" >
            
            <a onClick={() => paginate(number)} href='/' className='page-link'>
             {number}
            </a>
        </li>
    ))} </ul>
   </nav>
  )
}

export default Pagination
