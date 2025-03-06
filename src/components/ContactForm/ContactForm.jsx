import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Enter the number of characters from 3 to 50')
    .max(50, 'Enter the number of characters from 3 to 50')
    .required('This field is required'),
});

const PhoneSchema = Yup.object().shape({
  number: Yup.string()
    .phone('UA', true, 'Incorrect phone number')
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
      validationPhoneSchema={PhoneSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.box}>
          <label>Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.box}>
          <label>Number</label>
          <Field className={css.field} type="tel" name="phone" />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>
        <button className="css.button" type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
