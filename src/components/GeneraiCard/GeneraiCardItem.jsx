import { useState } from 'react';
import { Paper, Modal, InfoForm, Button } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import {
  Item,
  BtnMenu,
  ContainerDropdown,
  InsideBtn,
} from './GeneraiCard.styled';

const GeneralCardItem = ({
  text,
  id,
  onDeleteCard,
  relation,
  toggleModal,
  isOpenModal,
  onEditCart,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <Paper>
      <Item>
        <span>{text}</span>
        <BtnMenu onClick={toggleDropDown}>
          <BsThreeDotsVertical />
        </BtnMenu>

        {showDropDown && (
          <ContainerDropdown>
            <InsideBtn type="button" onClick={() => toggleModal('edit')}>
              <Edit />
              Редагувати
            </InsideBtn>

            {isOpenModal === 'edit' && (
              <Modal
                toggleModal={toggleModal}
                title={`Редактировать информацию  ${
                  relation === 'cities' ? 'о Городе' : 'об факультете'
                }`}
                children={
                  <InfoForm
                    onSubmit={onEditCart}
                    relation={relation}
                    idItem={id}
                    title={relation === 'cities' ? 'Город' : 'Факультет'}
                  />
                }
              />
            )}

            <InsideBtn onClick={() => toggleModal('delete')} type="button">
              <Delete />
              Удалити
            </InsideBtn>
            {isOpenModal === 'delete' && (
              <Modal
                toggleModal={toggleModal}
                title={`Удаление ${
                  relation === 'cities' ? 'Город' : 'факультете'
                }`}
                children={` Будут удалены все материалы и информация ${
                  relation === 'cities' ? 'о Городе' : 'об факультете'
                }`}
                actions={
                  <>
                    <Button action={toggleModal} text={'Ні'} />
                    <Button
                      action={() => onDeleteCard(id, relation)}
                      text={'Да'}
                    />
                  </>
                }
              />
            )}
          </ContainerDropdown>
        )}
      </Item>
    </Paper>
  );
};

export default GeneralCardItem;
