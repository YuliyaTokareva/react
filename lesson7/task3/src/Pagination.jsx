import React from "react";

const Pagination = (
    props,
    goPrev,
    goNext,
    currentPage,
    totalItems,
    itemsPerPge
) => {
    console.log(goNext);
    return (
        <>
            <button
                className='btn'
                onClick={props.goPrev}
                disabled={currentPage === 1}
            >
                ←
            </button>
            <span className='pagination__page'>{currentPage}</span>
            <button
                className='btn'
                onClick={props.goNext}
                disabled={currentPage === 1}
            >
                →
            </button>
        </>
    );
};

export default Pagination;
