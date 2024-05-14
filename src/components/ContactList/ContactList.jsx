import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  // selectFilteredNumberedContacts,
} from "../../redux/filtersSlice";

export default function ContactList() {
  const foundContact = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={css.list}>
        {foundContact.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
