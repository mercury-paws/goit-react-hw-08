import { useDispatch } from "react-redux";
import css from "./ModalAmend.module.css";
import { updateContact } from "../../redux/contacts/operations.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { selectLoadingUpdate } from "../../redux/contacts/selectors.js";
import toast from "react-hot-toast";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^(?:\d{3}-\d{2}-\d{2}|\d{2}-\d{2}-\d{2})$/,
      "Number must be in the format 777-77-77 or 77-77-77"
    )
    .required("Number is required"),
});

export default function ModalAmend({ onClose, amendInfo }) {
  const dispatch = useDispatch();

  const isUpdating = useSelector(selectLoadingUpdate);
  const handleSubmit = (values) => {
    const newContact = {
      id: amendInfo.id,
      name: values.name,
      number: values.number,
    };
    dispatch(updateContact(newContact))
      .unwrap()
      .then(() => {
        toast.success("Contact is succesfully updated!");
      })
      .catch((error) => {
        console.log(error);
      });
    onClose();
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <Formik
          initialValues={{
            name: amendInfo.name,
            number: amendInfo.number,
          }}
          validationSchema={UserSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <label>Name:</label>
            <Field name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
            <label>Number:</label>
            <Field type="text" name="number" />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
            <button className={css.btn} type="submit" disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update"}
            </button>
            <button
              className={css.btn}
              type="submit"
              disabled={isUpdating}
              onClick={() => onClose()}
            >
              Do not update, I've changed my mind
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
