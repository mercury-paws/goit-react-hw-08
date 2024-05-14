import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps.js";
import Loader from "./Loader/Loader.jsx";
// import { selectContacts } from "../redux/contactsSlice.js";
import { selectError, selectLoadingFetch } from "../redux/contactsSlice.js";

export default function App() {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingFetch);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <p>Ooops, smth went wrong</p>}
      <ContactList />
    </div>
  );
}
