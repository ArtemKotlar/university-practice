import { PureComponent } from 'react';
import { Overlay, ModalContent } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handeleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handeleKeyDown);
  }

  handelBackdropClick = event => {
    if (event.currentTarget === event.target) this.props.toggleModal();
  };

  handeleKeyDown = event => {
    if (event.code === 'Escape') this.props.toggleModal();
  };

  render() {
    const { title, children, actions } = this.props;

    return createPortal(
      <Overlay onClick={this.handelBackdropClick}>
        <ModalContent>
          <h2>{title}</h2>
          <div>{children}</div>
          {actions && <div>{actions}</div>}
        </ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;
