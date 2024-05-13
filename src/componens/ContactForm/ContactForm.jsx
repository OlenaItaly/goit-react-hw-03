import { Formik, Form, Field, ErrorMessage} from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
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
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor={`${fieldId}-name`}>Name</label>
            <Field type="text" name="name" id={`${fieldId}-name`} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={`${fieldId}-number`}>Number</label>
            <Field type="tel" name="number" id={`${fieldId}-number`} />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
    );
    
}