import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setUsersData,
  setCurrentPage,
  getUser,
  setShowModal,
} from "../redux/features/usersDataSlice";
import UserModal from "../components/UserModal";

function User() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { userid } = useParams();

  const userArr = userid.split(",");

  const { currentPage, showModal, user, usersData } = useSelector(
    (state) => state.usersData
  );

  useEffect(() => {
    const fetchUserData = async (page) => {
      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=50&seed=abc&noinfo`
      );
      const data = await res.json();
      dispatch(setUsersData(data));
    };

    fetchUserData(userArr[0]);
    dispatch(setCurrentPage(parseInt(userArr[0])));
  }, [dispatch, userArr]);

  useEffect(() => {
    if (usersData.results) {
      dispatch(getUser(userArr[1]));
      dispatch(setShowModal(true));
    }
  }, [usersData, dispatch, userArr]);

  function closeModal() {
    navigate("/");
    dispatch(setShowModal(false));
  }

  console.log(currentPage, user);

  return <div>{showModal && <UserModal func={closeModal} />}</div>;
}

export default User;
