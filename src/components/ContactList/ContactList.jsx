import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/slice";
import { selectLoadingFetch } from "../../redux/contacts/selectors";

export default function ContactList({ openModal, openAmendModal }) {
  const foundContact = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoadingFetch);
  return (
    <>
      {foundContact.length > 0 || isLoading ? (
        <ul className={css.list}>
          {foundContact.map((contact) => (
            <li key={contact.id}>
              <Contact
                contact={contact}
                openModal={openModal}
                openAmendModal={openAmendModal}
              />
            </li>
          ))}
        </ul>
      ) : (
        "No contacts found"
      )}
    </>
  );
}
