import PT from 'prop-types';
import { SectionStyled } from './Section.styled'
import cn from 'classnames'

const Section = ({ title, imege, children, isRightPosition, isRow}) => {
    return (
        <SectionStyled isRow={isRow}>
            <h2 className={cn('title', {title_right:isRightPosition})}>
                {imege && <img src={imege} alt={title} />}{title}</h2>
            <div className="section_row">{children}</div>
        </SectionStyled>
    );
    
};

export default Section;

Section.propTypes = {
    title: PT.string,
    imege: PT.string,
    children: PT.node,
    isRightPosition: PT.bool,
    isRow: PT.bool,
}