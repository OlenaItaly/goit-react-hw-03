import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm(onAdd) {
     const fieldId = useId();
  function handleSubmit(values, actions) {
      console.log(values);
        onAdd(values);
        actions.resetForm();
}
    return (
      <Formik
        initialValues={{
                username: "",
            numberPhon: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="${fieldId}-username">Name</label>
            <Field type="text" name="username" id="${fieldId}-username" />
          </div>
          <div>
            <label htmlFor="${fieldId}-numberPhon">Number</label>
            <Field type="text" name="numberPhon" id="${fieldId}-numberPhon" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
    
}