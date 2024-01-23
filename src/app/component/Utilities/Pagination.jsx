//setPage Recomendation if have very many child
const Pagination = ({ pagePagination, lastPage, setPage }) => {
  //BackTop = if nextpage, view back on top page
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  //handler Page Button
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => {
      if (prevState > 1) {
        scrollTop();
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  };

  return (
    <section>
      <div className="flex justify-center items-center py-5 px-2 gap-5 font-bold">
        {pagePagination <= 1 ? null : (
          <button
            onClick={handlePrevPage}
            className="transition-all hover:text-indigo-500"
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
            className="transition-all hover:text-indigo-500"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default Pagination;
