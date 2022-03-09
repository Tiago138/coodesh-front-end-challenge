import { useEffect } from "react";

import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import UserModal from "../components/UserModal";

import ReactPaginate from "react-paginate";

import { useDispatch, useSelector } from "react-redux";
import {
  setUsersData,
  setCurrentPage,
  setShowModal,
} from "../redux/features/usersDataSlice";

function User() {
  const { showModal, currentPage } = useSelector((state) => state.usersData);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async (page) => {
      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=50&seed=abc&noinfo`
      );
      const data = await res.json();
      dispatch(setUsersData(data));
    };

    fetchUserData(currentPage);
  }, [currentPage, dispatch]);

  function handlePageClick(data) {
    dispatch(setCurrentPage(data.selected + 1));
  }

  return (
    <>
      <SearchBar />
      <Table />
      {showModal && <UserModal func={() => dispatch(setShowModal(false))} />}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={5}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        initialPage={currentPage - 1}
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

export default User;
