import React from 'react';

const Pagination = ({ totalPages, page, setPage }: {totalPages: number, page: number, setPage: any}) => {

  const visiblePages = 3;

  const handlePageChange = (newPage: number) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };
  const renderPagination = () => {
    const currentPage = Math.max(1, Math.min(page, totalPages));
    const ellipsis = '...';

    let pages = [];

    if (totalPages <= visiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= visiblePages) {
        for (let i = 1; i <= visiblePages + 1; i++) {
          pages.push(
            <button
              key={i}
              className={`join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
        pages.push(
          <button key="right-ellipsis" className="join-item btn btn-disabled outline-0">
            {ellipsis}
          </button>
        );
        pages.push(
          <button
            key={totalPages}
            className={`join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage > totalPages - visiblePages) {
        pages.push(
          <button
            key={1}
            className={`join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
            onClick={() => handlePageChange(1)}
          >
            {1}
          </button>
        );
        pages.push(
          <button key="left-ellipsis" className="join-item btn btn-disabled outline-0">
            {ellipsis}
          </button>
        );
        for (let i = totalPages - visiblePages; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              className={`join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        pages.push(
          <button
            key={1}
            className={`join-item btn ${1 === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
            onClick={() => handlePageChange(1)}
          >
            {1}
          </button>
        );
        pages.push(
          <button key="left-ellipsis" className="join-item btn btn-disabled outline-0">
            {ellipsis}
          </button>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(
            <button
              key={i}
              className={`join-item btn ${i === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </button>
          );
        }
        pages.push(
          <button key="right-ellipsis" className="join-item btn btn-disabled outline-0">
            {ellipsis}
          </button>
        );
        pages.push(
          <button
            key={totalPages}
            className={`join-item btn ${totalPages === currentPage ? 'btn-primary outline-0' : 'outline-0'}`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };



  return <div className="join">{renderPagination()}</div>;
};

export default Pagination;
