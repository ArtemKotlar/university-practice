import PT from 'prop-types';
import GeneraiCardItem from './GeneraiCardItem';

const GeneraiCardList = ({ listData, isOpenDown }) => {
  return (
    <ul>
      {listData.map(({ text }) => (
        <GeneraiCardItem key={text} text={text} isOpenDown={isOpenDown} />
      ))}
    </ul>
  );
};

export default GeneraiCardList;

GeneraiCardList.propTypes = {
  listData: PT.array,
  isOpenDown: PT.func,
};
