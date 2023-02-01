import GeneraiCardItem from './GeneraiCardItem';

const GeneraiCardList = ({
  listData,
  isOpenDown,
  oneDeleteCard,
  showDropDown,
  isModalOpen,
}) => {
  return (
    <ul>
      {listData.map(({ text, relation }) => (
        <GeneraiCardItem
          id={text}
          key={text}
          text={text}
          isOpenDown={isOpenDown}
          oneDeleteCard={oneDeleteCard}
          relation={relation}
          showDropDown={showDropDown}
          isModalOpen={isModalOpen}
        />
      ))}
    </ul>
  );
};

export default GeneraiCardList;
