import PT from 'prop-types';
import { Paper } from 'components';
import { Container, ColumnItem } from './TutorsItem.styled';

const TutorsItem = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
  deleteTutor,
}) => {
  return (
    <Paper>
      <Container>
        <ColumnItem>
          <samp>{firstName}</samp>
          <samp>{lastName}</samp>
          <samp>{patronymic}</samp>
        </ColumnItem>
        <ColumnItem>
          <samp>{phone}</samp>
          <samp>{email}</samp>
          <samp>{city}</samp>
        </ColumnItem>
        <ColumnItem>
          <p>{options}</p>
        </ColumnItem>
        <ColumnItem>
          <button type="button" onClick={() => deleteTutor(firstName)}>
            Delete
          </button>
        </ColumnItem>
      </Container>
    </Paper>
  );
};

export default TutorsItem;

TutorsItem.propTypes = {
  firstName: PT.string.isRequired,
  lastName: PT.string.isRequired,
  patronymic: PT.string.isRequired,
  phone: PT.string.isRequired,
  email: PT.string.isRequired,
  city: PT.string.isRequired,
  options: PT.string,
};
