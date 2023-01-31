import { Form, Formik, Field } from 'formik';
import { object, string } from 'yup';
import { Button } from 'components';
import { ErrMessage } from './TutorForm.styled';

const InfoForm = ({ onSubmit, title, pleceholder }) => {
  const initialValues = { name: '' };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log('values', values);
    resetForm();
    setSubmitting(false);
  };

  const validationShemaForm = object().shape({
    name: string().min(2, 'Ведіть мінімальну кількість символів'),
  });

  return (
    <Formik
      validationSchema={validationShemaForm}
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
    >
      {({
        values,
        handleChange,
        handleBlur,
        /* and other goodies */
      }) => (
        <Form>
          <div>
            <h3>{title}</h3>
            <Field
              type="text"
              id={pleceholder}
              name="name"
              pleceholder={pleceholder}
              values={values.name || ''}
              onBlur={handleBlur}
              onChanga={handleChange}
            />
            <ErrMessage component="div" name="name" />
          </div>

          <Button text="Пригласить" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default InfoForm;
