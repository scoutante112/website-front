import React from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useDark } from '../../App';

const Pagination = ({ totalPages, page, setPage }: {totalPages: number, page: number, setPage: any}) => {
    if(totalPages < 2) {
        return <></>;
    }
    const visiblePages = 3;

    const handlePageChange = (newPage: number) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const renderPagination = () => {
        const currentPage = Math.max(1, Math.min(page, totalPages));
        const ellipsis = '...';

        const pages = [];

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

    const generatePageNumbers = () => {
        const currentPage = Math.max(1, Math.min(page, totalPages));
        const ellipsis = '...';

        const pageNumbers = [];

        if (totalPages <= visiblePages + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= visiblePages) {
                for (let i = 1; i <= visiblePages + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push(0); // Placeholder for ellipsis
                pageNumbers.push(totalPages);
            } else if (currentPage > totalPages - visiblePages) {
                pageNumbers.push(1);
                pageNumbers.push(0); // Placeholder for ellipsis
                for (let i = totalPages - visiblePages; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push(0); // Placeholder for ellipsis
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push(0); // Placeholder for ellipsis
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 pb-4">
            <div className="-mt-px flex w-0 flex-1 ml-12 md:ml-24 lg:ml-40 2xl:ml-52">
                <button
                    className={page === 1 ? 'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500' : 'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >
                    <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
                </button>
            </div>
            <div className="hidden md:-mt-px md:flex mx-2 lg:mx-8 xl:mx-16">
                {pageNumbers.map((pageNumber, index) => {
                    if (pageNumber === 0) {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
                            >
                ...
                            </span>
                        );
                    }
                    return (
                        <button
                            key={pageNumber}
                            className={`inline-flex items-center border-t-2 ${
                                pageNumber === page ? 'border-bg450-logo' : 'border-transparent'
                            } px-4 pt-4 text-sm font-medium ${
                                pageNumber === page ? 'text-bg450-logo' : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end mr-12 md:mr-24 lg:mr-40 2xl:mr-52">
                <button
                    className={page === totalPages ? 'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500' : 'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                >
          Next
                    <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
            </div>
        </nav>
    );
};

export default Pagination;
