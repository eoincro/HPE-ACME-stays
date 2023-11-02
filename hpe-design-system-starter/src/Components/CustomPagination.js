import React from 'react';
import './CustomPagination.css';
const CustomPagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    return (
        <div className="custom-pagination">
            <button
                className={`custom-button ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <button
                className={`custom-button ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default CustomPagination;