import PT from 'prop-types';
import { Paper } from "components";
import UniversityIcon from '../../assets/images/mock-university.svg';
import EditButtonIcon from '../../assets/images/edit.svg';
import DeleteButtonIcon from '../../assets/images/delete.svg';
import css from '../UniversityCard/UniversityCard.module.css'

const UniversityCard = ({ name, onEdit, onDelete }) => {
    return (
        <Paper classes={css.container}>
            <img className={css.universityImg} src={UniversityIcon} alt={name} />
            <span className={css.university}>Университет</span>
            <h3 className={css.universityName}>{name}</h3>
            <div className="controls">
                <button
                    className={css.buttonEdit}
                    type="button"
                    onClick={() => onEdit()}
                >
                    <img src={EditButtonIcon} alt="" />
                </button>
                <button
                    className={css.buttonDelete}
                    type="button"
                    onClick={() => onDelete()}
                >
                    <img src={DeleteButtonIcon} alt="" />
                </button>
            </div>
        </Paper>
    );
};

export default UniversityCard;

UniversityCard.propTypes = {
    name: PT.string.isRequired,
    onEdit: PT.func.isRequired,
    onDelete: PT.func.isRequired,
};