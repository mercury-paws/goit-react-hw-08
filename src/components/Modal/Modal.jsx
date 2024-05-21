import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectLoadingDelete } from "../../redux/contacts/selectors";
import css from "./Modal.module.css";
import toast from "react-hot-toast";

export default function Modal({ id, onClose }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingDelete);
  const deletingContact = async () => {
    await dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact is succesfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
    onClose();
  };
  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <p>Do you really want to delele this contact? This can't be undone.</p>
        <div className={css.btnContainer}>
          <button
            className={css.btn}
            type="button"
            onClick={deletingContact}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
          <button
            type="button"
            className={css.deleteBtn}
            onClick={onClose}
            disabled={isLoading}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
