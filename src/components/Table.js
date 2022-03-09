import { useSelector, useDispatch } from "react-redux";
import { setFilterGender } from "../redux/features/usersDataSlice";
import TableRow from "./TableRow";

function Table() {
  const { usersData, filter, filterGender } = useSelector(
    (state) => state.usersData
  );

  const dispatch = useDispatch();

  // Function to search the user,
  // Receives the input from the search bar and filter the user array
  function searchUser(search, userArray) {
    const expressao = new RegExp(search, "i");
    const arr = userArray.filter(
      (user) =>
        expressao.test(user.name.first) ||
        expressao.test(user.name.last) ||
        expressao.test(user.nat)
    );
    return arr;
  }

  // select the gender
  function selectGender() {
    filterGender === 2
      ? dispatch(setFilterGender(0))
      : dispatch(setFilterGender(filterGender + 1));
  }

  // filter the array per gender.
  function filterUserGender() {
    let arr;

    switch (filterGender) {
      case 0:
        arr = usersData.results.filter(
          (user) => user.gender === "male" || "female"
        );
        break;
      case 1:
        arr = usersData.results.filter((user) => user.gender === "male");
        break;
      case 2:
        arr = usersData.results.filter((user) => user.gender === "female");
        break;
      default:
    }

    return arr;
  }

  // Creates the user array.
  let trs;
  if (usersData.results) {
    let userArray = filterUserGender();
    userArray = searchUser(filter, userArray);

    trs = userArray.map((user) => {
      const date = new Date(user.dob.date);
      return (
        <TableRow
          key={user.login.uuid}
          name={`${user.name.first} ${user.name.last}`}
          gender={user.gender}
          date={date.toDateString()}
          nat={user.nat}
          id={user.login.uuid}
        />
      );
    });
  }

  const gender = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M480 .0002l-112.4 .0001c-21.38 0-32.09 25.85-16.97 40.97l29.56 29.56l-27.11 27.11C326.1 76.85 292.7 64 256 64c-88.37 0-160 71.63-160 160c0 77.4 54.97 141.9 128 156.8v19.22H192c-8.836 0-16 7.162-16 16v31.1c0 8.836 7.164 16 16 16l32 .0001v32c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-32l32-.0001c8.838 0 16-7.164 16-16v-31.1c0-8.838-7.162-16-16-16h-32v-19.22c73.03-14.83 128-79.37 128-156.8c0-28.38-8.018-54.65-20.98-77.77l30.45-30.45l29.56 29.56C470.1 160.5 496 149.8 496 128.4V16C496 7.164 488.8 .0002 480 .0002zM256 304c-44.11 0-80-35.89-80-80c0-44.11 35.89-80 80-80c44.11 0 80 35.89 80 80C336 268.1 300.1 304 256 304z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M431.1 31.1l-112.6 0c-21.42 0-32.15 25.85-17 40.97l29.61 29.56l-56.65 56.55c-30.03-20.66-65.04-31-100-31c-47.99-.002-95.96 19.44-131.1 58.39c-60.86 67.51-58.65 175 4.748 240.1C83.66 462.2 129.6 480 175.5 480c45.12 0 90.34-17.18 124.8-51.55c61.11-60.99 67.77-155.6 20.42-224.1l56.65-56.55l29.61 29.56C411.9 182.2 417.9 184.4 423.8 184.4C436.1 184.4 448 174.8 448 160.4V47.1C448 39.16 440.8 31.1 431.1 31.1zM243.5 371.9c-18.75 18.71-43.38 28.07-68 28.07c-24.63 0-49.25-9.355-68.01-28.07c-37.5-37.43-37.5-98.33 0-135.8c18.75-18.71 43.38-28.07 68.01-28.07c24.63 0 49.25 9.357 68 28.07C281 273.5 281 334.5 243.5 371.9z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path d="M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 86.26 62.1 157.9 144 172.1v35.05H112c-8.836 0-16 7.162-16 16v32c0 8.836 7.164 16 16 16H160v48c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-48h48c8.838 0 16-7.164 16-16v-32c0-8.838-7.162-16-16-16H224v-35.05C305.9 333.9 368 262.3 368 176zM192 272c-52.93 0-96-43.07-96-96c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96C288 228.9 244.9 272 192 272z" />
    </svg>,
  ];

  return (
    <table className="usersTable">
      <thead>
        <tr>
          <td>Name</td>
          <td className="gender" onClick={selectGender}>
            Gender {gender[filterGender]}
          </td>
          <td>Birth</td>
          <td>Nat</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>{trs}</tbody>
    </table>
  );
}

export default Table;
