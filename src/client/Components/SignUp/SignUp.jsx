import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal.jsx';
import Input from '../UI/Input/Input.jsx';

import classes from './SignUp.css';

const SignUp = () => {
  const [signedIn, setSignedIn] = useState(true);

  const [formIsValid, setValid] = useState(false);
  // rules for input content
  const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };
  // formIsValid: false,
  //     loading: false,
  //     isLoggedIn: false,
  //     authToken: null,
  //     isError: false
  const [inputElements, setInputElement] = useState([
    {
      key: 'email',
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email Address',
        image: '/images/id-card.png',
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
      },
      valid: false,
      touched: false,
    },
    {
      key: 'password',
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password...',
        image: '/images/password.png',
        value: '',
        validation: {
          required: true,
          minLength: 7,
          maxLength: 12,
        },
      },
      valid: false,
      touched: false,
    },
  ]);

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...inputElements,
    };
      // deeper clone of login form
    const updatedFormELement = {
      ...updatedLoginForm[inputIdentifier],
    };

    console.log('uFE', updatedFormELement);

    updatedFormELement.value = event.target.value;
    updatedFormELement.valid = checkValidity(
      updatedFormELement.value,
      updatedFormELement.validation,
    );
    updatedFormELement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormELement;

    let valid = true;

    for (const inputIdentifiers in updatedLoginForm) {
      valid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }

    setValid(valid);
  };

  const [loading, setLoading] = useState(false);
  const loginHandler = (event) => {
    event.preventDefault();
    // request
    setLoading(true);

    const formData = {};
    for (const formElementIdentifier in inputElements) {
      formData[formElementIdentifier] = inputElements[formElementIdentifier].value;
    }

    console.log('formdata:', formData);

    const user = {
      Email: '',
      password: '',
      token: true,
      data: formData,
    };
    console.log('user', user);
  };

  console.log(inputElements);

  const form = (
    <form name="form-login" className={classes.Form} onSubmit={loginHandler}>
      {inputElements.map((inputElement) => (
        <Input
          key={inputElement.elementConfig.type}
          elementType={inputElement.elementType}
          elementConfig={inputElement.elementConfig}
          value={inputElement.elementConfig.value}
          changed={(event) => inputChangedHandler(event, inputElement.key)}
          invalid={!inputElement.valid}
          shouldValidate={inputElement.elementConfig.validation}
          touched={inputElement.touched}
          label={inputElement.elementConfig.image}
        />
      ))}
      {/* <input type="submit" value="Login" /> */}
      <button type="submit">Login</button>
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
