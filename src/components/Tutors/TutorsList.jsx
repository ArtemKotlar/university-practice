import PT from 'prop-types';
import TutorsItem from './TutorsItem';

const TutorsList = ({ tutors, deleteTutor }) => {
  return tutors.map(tutor => (
    <TutorsItem key={tutor.phone} {...tutor} deleteTutor={deleteTutor} />
  ));
};
export default TutorsList;

TutorsList.propTypes = {
  tutors: PT.arrayOf(PT.shape({ phone: PT.string.isRequired })),
};
