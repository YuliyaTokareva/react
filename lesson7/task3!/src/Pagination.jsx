import React from "react";

const Pagination = (goPrev, goNext, currentPage, totalItems, itemsPerPge) => {
    console.log(currentPage);
    return (
        <>
            <div className='pagination'>
                <button
                    className='btn'
                    onClick={goPrev}
                    disabled={currentPage === 1}
                >
                    {currentPage === 1 ? "" : "←"}
                </button>
                <span className='pagination__page'>{currentPage}</span>
                <button
                    className='btn'
                    onClick={goNext}
                    disabled={currentPage !== totalItems || totalItems === 0}
                >
                    {currentPage === totalItems ? "" : "→"}
                </button>
            </div>
        </>
    );
};

export default Pagination;
