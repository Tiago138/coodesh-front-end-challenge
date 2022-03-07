import HeaderBar from "./components/HeaderBar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "./redux/features/usersDataSlice";
import UserModal from "./components/UserModal";

function App() {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.usersData);

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  console.log("rendered");

  return (
    <>
      <HeaderBar />
      <SearchBar />
      <Table />
      {showModal && <UserModal />}
    </>
  );
}

export default App;
