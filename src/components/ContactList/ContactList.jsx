import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  // selectFilteredNumberedContacts,
} from "../../redux/filters/slice";

export default function ContactList() {
  const foundContact = useSelector(selectFilteredContacts);
  return (
    <>
      {foundContact.length > 0 ? (
        <ul className={css.list}>
          {foundContact.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        "No contacts found"
      )}
    </>
  );
}
