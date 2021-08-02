import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handlerPageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button 
      disable={_page <= 1} 
      onClick={() => handlerPageChange(_page - 1)}>
        Prev
      </button>

      <button
        disable={_page >= totalPages}
        onClick={() => handlerPageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
