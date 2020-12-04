import React, { Component } from 'react';
import propTypes from 'prop-types';
import Aux from '../../Hoc/Aux/Aux.jsx';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop.jsx';

class Modal extends Component {
  shouldComponentUpdate(nextProps, { show, children }) {
    return nextProps.show !== show || nextProps.children !== children;
  }

  render() {
    const { show, modalClosed, children } = this.props;
    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  show: propTypes.bool.isRequired,
  modalClosed: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

export default Modal;
