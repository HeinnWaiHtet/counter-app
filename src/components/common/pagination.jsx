import React from 'react';
import PropType from 'prop-types';
import _ from 'lodash';
const Pagination = (props) => {
    const {itemsCount , pageSize, onPageChanged, currentPage} = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if(pageCount === 1) return null;
    const pageList = _.range(1,pageCount + 1); // [1,2,3 ...] lo page array list output
    return ( <nav>
        <ul className="pagination">
            {pageList.map(page => (
               <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                  <a className="page-link" onClick = {() => onPageChanged(page)}>{page}</a>
               </li>
            ) )}
        </ul>
    </nav> );
}

Pagination.propTypes = {
    itemsCount : PropType.number.isRequired ,
    pageSize : PropType.number.isRequired ,
    onPageChanged : PropType.func.isRequired,
    currentPage : PropType.number.isRequired,
}

export default Pagination;