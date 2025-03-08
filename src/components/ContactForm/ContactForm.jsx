import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Enter the number of characters from 3 to 50')
    .max(50, 'Enter the number of characters from 3 to 50')
    .required('This field is required'),
  number: Yup.string()
    .max(10, 'Incorrect phone number')
    .required('This field is required'),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    console.log('handleSubmit', values);
    addContact({ id: nanoid(), ...values });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '', id: nanoid() }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label className={css.label}>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.box}>
          <label className={css.label}>Number</label>
          <Field className={css.field} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
