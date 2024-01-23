import React, { useState } from "react";

//setPage Recomendation if have very many child
const Pagination = ({ pagePagination, lastPage, setPage }) => {
  //Color Button
  const [isNextButtonClicked, setNextButtonClicked] = useState(false);
  const [isPrevButtonClicked, setPrevButtonClicked] = useState(false);

  //BackTop = if nextpage, view back on top page
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  //handler Page Button
  const handleNextPage = () => {
    setPrevButtonClicked(false);
    setNextButtonClicked(true);
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => {
      if (prevState > 1) {
        setPrevButtonClicked(true);
        setNextButtonClicked(false);
        scrollTop();
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  const handleFirstPage = () => {
    setPage((prevState) => (prevState = 1));
    scrollTop();
  };
  const handleLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  return (
    <section>
      <div>
        <div className="flex justify-center items-center py-5 px-2 gap-5 font-bold">
          {pagePagination <= 1 ? null : (
            <button
              onClick={handlePrevPage}
              className={`transition-all hover:text-indigo-500 ${
                isPrevButtonClicked ? "text-indigo-500" : ""
              }`}
            >
              Prev
            </button>
          )}
          {/* this pagePagination is simple change value grom page in parent populer page */}
          <p>
            {pagePagination} of {lastPage}
          </p>
          {pagePagination >= lastPage ? null : (
            <button
              onClick={handleNextPage}
              className={`transition-all hover:text-indigo-500 ${
                isNextButtonClicked ? "text-indigo-500" : ""
              }`}
            >
              Next
            </button>
          )}
        </div>
        <div className="flex justify-center items-center px-2 gap-5 font-bold">
          <button
            onClick={handleFirstPage}
            className="transition-all hover:text-indigo-500"
          >
            Back to First Page
          </button>
          <p>|</p>
          <button
            onClick={handleLastPage}
            className="transition-all hover:text-indigo-500"
          >
            Go to Last Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
