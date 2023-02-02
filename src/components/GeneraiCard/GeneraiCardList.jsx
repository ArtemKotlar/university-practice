import GeneraiCardItem from './GeneraiCardItem';

const GeneraiCardList = ({
  listData,
  isOpenDown,
  onDeleteCard,

  isOpenModal,
  toggleModal,
  onEditCart,
}) => {
  return (
    <ul>
      {listData.map(({ text, relation }) => (
        <GeneraiCardItem
          id={text}
          key={text}
          text={text}
          isOpenDown={isOpenDown}
          onDeleteCard={onDeleteCard}
          relation={relation}
          toggleModal={toggleModal}
          isOpenModal={isOpenModal}
          onEditCart={onEditCart}
        />
      ))}
    </ul>
  );
};

export default GeneraiCardList;
