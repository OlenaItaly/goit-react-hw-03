import { Formik, Form, Field, ErrorMessage} from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const phoneRegExp = 
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{2,4}?[ \\-]*[0-9]{2,4}?$/;

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid ")
    .min(6, "Too Short!")
    .max(14, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
     const fieldId = useId();
  function handleSubmit(values, actions) {
    console.log(values);
    values.id = nanoid();
        onAdd(values);
        actions.resetForm();
}
    return (
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactsSchema}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor={`${fieldId}-name`}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={`${fieldId}-name`}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={`${fieldId}-number`}>Number</label>
            <Field
              className={css.input}
              type="tel"
              name="number"
              id={`${fieldId}-number`}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
    
}