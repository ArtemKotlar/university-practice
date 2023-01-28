import { Form, Formik, Field, ErrorMessage } from 'formik';
import { FieldStyled, ErrMessage } from './TutorForm.styled';
import { object, string, number, date, InferType } from 'yup';

const fieldsData = [
  { name: 'lastName', label: 'Прізвище' },
  { name: 'firstName', label: 'Імʼя' },
  { name: 'patronymic', label: 'По-батькові' },
  { name: 'phone', label: 'Телефон' },
  { name: 'email', label: 'Емеіл' },
  { name: 'city', label: 'Місто' },
];

const validationShemaForm = object().shape({
  firstName: string().required('Заповніть це поле'),
  lastName: string().min(2, 'Ведіть мінімальну кількість символів').required(),
  patronymic: string().required(),
  phone: string().required(),
  email: string().required(),
  city: string().required(),
});

const TutorForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    patronymic: '',
    phone: '',
    email: '',
    city: '',
  };
  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    resetForm();
    setSubmitting(false);
  };
  return (
    <Formik
      validationSchema={validationShemaForm}
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <h3>Добавление преподавателя</h3>
          {fieldsData.map(({ name, label }) => {
            return (
              <div key={name}>
                <FieldStyled
                  key={name}
                  type="text"
                  id={name}
                  name={name}
                  placeholder={label}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[name] || ''}
                />
                <ErrMessage component="div" name={name} />
              </div>
            );
          })}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default TutorForm;
