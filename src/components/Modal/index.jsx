import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div onClick={this.props.onClose} className={css.Overlay}>
        <div onClick={e => e.stopPropagation()} className={css.Modal}>
          <img src={this.props.src} alt="picture" />
        </div>
      </div>
    );
  }
}

export default Modal;
