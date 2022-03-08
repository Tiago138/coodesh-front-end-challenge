import { useDispatch } from "react-redux";
import { setFilter } from "../redux/features/usersDataSlice";

function SearchBar() {
  const dispatch = useDispatch();

  // Take the input and send to the store to be used to filter the users.
  function handleChange(event) {
    dispatch(setFilter(event.target.value));
  }

  return (
    <div className="searchbar">
      <input
        className="search"
        type="text"
        placeholder="Search for name or nationality"
        onChange={handleChange}
        name="search"
      />
    </div>
  );
}

export default SearchBar;
