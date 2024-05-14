import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectLoadingDelete } from "../../redux/contactsSlice";

//екшен видалення контакту при кліку по кнопці видалення useDispatch

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingDelete);

  return (
    <div className={css.contactInfo}>
      <div>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
