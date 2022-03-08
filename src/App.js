import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setUsersData, setCurrentPage } from "./redux/features/usersDataSlice";
import UserModal from "./components/UserModal";
import ReactPaginate from "react-paginate";

function App() {
  const dispatch = useDispatch();
  const { showModal, currentPage } = useSelector((state) => state.usersData);

  useEffect(() => {
    fetchUserData(currentPage);
  }, [currentPage]);

  const fetchUserData = async (page) => {
    const res = await fetch(
      `https://randomuser.me/api/?page=${page}&results=50&seed=abc&noinfo`
    );
    const data = await res.json();
    dispatch(setUsersData(data));
  };

  function handlePageClick(data) {
    dispatch(setCurrentPage(data.selected + 1));
  }

  console.log("rendered");

  return (
    <>
      <HeaderBar />
      <SearchBar />
      <Table />
      {showModal && <UserModal />}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        // Put here the classname of the ul
        containerClassName={"paginate__container"}
        // Put here the classname of the li
        pageClassName={"paginate__Page"}
        // Put here the classname of the a
        pageLinkClassName={""}
        // Stiling of the previous buttom
        previousClassName={"paginate__previous"}
        previousLinkClassName={""}
        // Stiling og the next buttom
        nextClassName={"paginate__next"}
        nextLinkClassName={""}
        // Put here the class for the active page
        activeClassName={"paginate__active"}
      />
    </>
  );
}

export default App;
