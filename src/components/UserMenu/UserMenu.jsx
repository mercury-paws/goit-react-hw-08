// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors";
// import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  //   const dispatch = useDispatch();

  const handleLogout = () => {};

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, someone</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
