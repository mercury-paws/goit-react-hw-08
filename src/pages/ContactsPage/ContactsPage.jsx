import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import Loader from "../../components/Loader/Loader.jsx";
import { selectError } from "../../redux/contacts/selectors.js";
import { selectLoadingFetch } from "../../redux/contacts/selectors.js";
import css from "./ContactsPage.module.css";
import Modal from "../../components/Modal/Modal.jsx";
import ModalAmend from "../../components/ModalAmend/ModalAmend.jsx";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingFetch);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [modalAmendIsOpened, setModalAmendIsOpened] = useState(false);
  const [amendInfo, setAmendInfo] = useState(false);

  const [id, setId] = useState();

  const openAmendModal = (contact) => {
    setModalAmendIsOpened(true);
    setAmendInfo({
      id: contact.id,
      name: contact.name,
      number: contact.number,
    });
  };

  const closeAmendModal = () => {
    setModalAmendIsOpened(false);
    setAmendInfo(null);
  };

  const openModal = (contact) => {
    setModalIsOpened(true);
    setId(contact.id);
  };
  const closeModal = () => {
    setModalIsOpened(false);
    setId(null);
    setAmendInfo(null);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div className={css.searchFormBlock}>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <Loader />}
      {isError && <p>Ooops, smth went wrong</p>}
      <ContactList openModal={openModal} openAmendModal={openAmendModal} />
      {modalIsOpened && <Modal id={id} onClose={closeModal} />}
      {modalAmendIsOpened && (
        <ModalAmend amendInfo={amendInfo} onClose={closeAmendModal} />
      )}
    </div>
  );
}
