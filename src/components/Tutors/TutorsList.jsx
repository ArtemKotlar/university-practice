import PT from 'prop-types';
import TutorsItem from "./TutorsItem"

const TutorsList = ({tutors}) => {
    return (
        tutors.map(tutor => <TutorsItem key={tutor.phone} {...tutor} />)
    )
}
export default TutorsList

TutorsList.propTypes = {
    tutors: PT.arrayOf(PT.shape({phone: PT.string.isRequired})),
};