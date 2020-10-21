import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal.jsx';
import Input from '../UI/Input/Input.jsx';

import classes from './SignUp.css';

const SignUp = () => {
  const [signedIn, setSignedIn] = useState(true);
  const [formIsValid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  // formIsValid: false,
  //     loading: false,
  //     isLoggedIn: false,
  //     authToken: null,
  //     isError: false
  const [inputElements, setInputElement] = useState([
    {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address',
          image: '/images/id-card.png',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
    },
    {
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password...',
          image: '/images/password.png',
        },
        value: '',
        validation: {
          required: true,
          minLength: 7,
          maxLength: 12,
        },
        valid: false,
        touched: false,
      },
    },
  ]);

  console.log(inputElements);

  const form = (
    <form name="form-login" className={classes.Form} onSubmit={this.loginHandler}>
      {inputElements.map((inputElement) => (
        <Input
          key={inputElement.elementConfig.type}
          elementType={inputElement.elementType}
          elementConfig={inputElement.elementConfig}
          value={inputElement.value}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
          invalid={!inputElement.valid}
          shouldValidate={inputElement.validation}
          touched={inputElement.touched}
          label={inputElement.elementConfig.image}
        />
      ))}
      {/* <input type="submit" value="Login" /> */}
      <button type="submit" disabled={!formIsValid}>Login</button>
      <Link to="/login">Already have an account?</Link>
    </form>
  );

  return (
    <div>
      <Modal show={signedIn} modalClosed={() => setSignedIn(false)}>
        {form}
      </Modal>
    </div>
  );
};

export default SignUp;
