import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import toast from "react-hot-toast";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email must be a valid format with @ symbol"
    )
    .required("Email is required"),
});
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Succesfully registered!");
      })
      .catch(() => {
        toast.error("Smth went wrong");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>Username</label>
        <Field type="text" name="name" />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.label}>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label className={css.label}>Password</label>
        <Field type="password" name="password" />

        <button type="submit" className={css.submitBtn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
