import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../redux/features/usersDataSlice";

import "./UserModal.scss";

function UserModal() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.usersData);
  console.log(user);

  const date = new Date(user.dob.date);

  return (
    <div>
      <span
        className="overlay"
        onClick={() => dispatch(setShowModal(false))}
      ></span>
      <div
        className="container__user__modal"
        style={
          user.gender === "male" ? { color: "#5e81ac" } : { color: "#b48ead" }
        }
      >
        <img
          src={user.picture.large}
          alt={user.name.first}
          className={user.gender === "male" ? "male" : "female"}
        />
        <h3>
          {user.name.title} {user.name.first} {user.name.last}
        </h3>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          Gender: <span>{user.gender}</span>
        </p>
        <p>
          Birth: <span>{date.toDateString()}</span>
        </p>
        <p>
          Phone: <span>{user.cell}</span>
        </p>
        <p>
          Nat: <span>{user.nat}</span>
        </p>
        <div className="address__container">
          <p>
            Country: <span>{user.location.country}</span>
          </p>
          <p>
            City: <span>{user.location.city}</span>
          </p>
          <p>
            Postcode: <span>{user.location.postcode}</span>
          </p>
          <p>
            address:{" "}
            <span>
              {user.location.street.name}, {user.location.street.number}
            </span>
          </p>
        </div>
        {user.id.name && (
          <p>
            {user.id.name}: <span>{user.id.value}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default UserModal;
