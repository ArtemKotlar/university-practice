import { Component } from 'react';
import { Paper, Modal, InfoForm } from 'components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ReactComponent as Edit } from '../../assets/images/edit.svg';
import { ReactComponent as Delete } from '../../assets/images/delete.svg';
import {
  Item,
  BtnMenu,
  ContainerDropdown,
  InsideBtn,
} from './GeneraiCard.styled';

class GeneraiCardItem extends Component {
  state = { showDropDown: false };

  toggleDropDown = () => {
    this.setState(({ showDropDown }) => ({ showDropDown: !showDropDown }));
  };

  render() {
    const { text, id, oneDeleteCard, relation, toggleModal, isModalOpen } =
      this.props;
    return (
      <Paper>
        <Item>
          <span>{text}</span>
          <BtnMenu onClick={this.toggleDropDown}>
            <BsThreeDotsVertical />
          </BtnMenu>

          {this.state.showDropDown && (
            <ContainerDropdown>
              <InsideBtn type="button" onClick={() => toggleModal('edit')}>
                <Edit />
                Редагувати
              </InsideBtn>
              {isModalOpen === 'edit' && (
                <Modal
                  toggleModal={toggleModal}
                  title={`Редактировать информацию  ${
                    relation === 'cities' ? 'о Городе' : 'об факультете'
                  }`}
                  children={<InfoForm />}
                />
              )}

              <InsideBtn
                onClick={() => oneDeleteCard(id, relation)}
                type="button"
              >
                <Delete />
                Удалити
              </InsideBtn>
              {isModalOpen === 'delete' && (
                <Modal
                  toggleModal={toggleModal}
                  title={`Удаление ${
                    relation === 'cities' ? 'Город' : 'факультете'
                  }`}
                />
              )}
            </ContainerDropdown>
          )}
        </Item>
      </Paper>
    );
  }
}

export default GeneraiCardItem;
