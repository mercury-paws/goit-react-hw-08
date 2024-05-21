import css from "./Contact.module.css";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/contacts/selectors";
import { useState } from "react";

//екшен видалення контакту при кліку по кнопці видалення useDispatch

export default function Contact({ contact, openModal, openAmendModal }) {
  const isError = useSelector(selectError);
  const [color, setColor] = useState("#e6b985");

  return (
    <div
      className={css.contactInfo}
      style={{
        borderTop: `30px solid ${color}`,
        boxShadow: `0 20px 56px ${color}`,
      }}
    >
      <form action="">
        <input
          type="color"
          value={color}
          id="color"
          className={css.colorInput}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
      <div>
        <p className={css.text}>{contact.name}</p>
        <p className={css.text}>{contact.number}</p>
      </div>
      <div className={css.btnsContainer}>
        <button
          className={css.deleteBtn}
          type="button"
          onClick={() => openModal(contact)}
        >
          Delete
        </button>
        <button
          className={css.amendBtn}
          type="button"
          onClick={() => openAmendModal(contact)}
        >
          Amend
        </button>
      </div>
      {isError && <p>Ooops, smth went wrong</p>}
    </div>
  );
}
