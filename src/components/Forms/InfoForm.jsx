import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { ErrMessage } from './TutorForm.styled';
import { Button } from 'components';

const InfoForm = ({
  onSubmit,
  title,
  placeholder,
  idItem,
  relation,
  textItem,
}) => {
  const initialValues = { name: textItem || '' };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const data = idItem
      ? { id: idItem, relation, name: values.name }
      : values.name;
    onSubmit(data);
    resetForm();
    setSubmitting(false);
  };

  const validationSchemaForm = object().shape({
    name: string().min(2, 'Введіть мінімальну кількість символів'),
  });
  return (
    <Formik
      validationSchema={validationSchemaForm}
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
              id={placeholder}
              name="name"
              placeholder={placeholder}
              value={values.name || ''}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <ErrMessage component="div" name="name" />
          </div>

          <Button text={idItem ? 'save' : 'add'} type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default InfoForm;
