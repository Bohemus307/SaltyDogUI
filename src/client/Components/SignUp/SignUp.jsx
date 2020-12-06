import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from '../Modal/Modal.jsx';
import Input from '../UI/Input/Input.jsx';

import { createAccount, isLoggedIn } from '../Auth/auth';
import classes from './SignUp.css';

const SignUp = () => {
  const history = useHistory();
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

  const [inputElements, setInputElements] = useState(
    {
      Name: {
        elementType: 'input',
        elementConfig: {
          type: 'Name',
          placeholder: 'Name...',
          image: '/images/user.svg',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email Address...',
          image: '/images/address.svg',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      EmployeeNumber: {
        elementType: 'input',
        elementConfig: {
          type: 'Employee Access Number',
          placeholder: 'Employee Access Number...',
          image: '/images/id-card.png',
        },
        value: '',
        validation: {
          required: true,
          isId: true, // need to add check for this in verify method
          minLength: 6,
          maxLength: 6,
        },
        valid: false,
        touched: false,
      },
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
      passwordVerify: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password Again...',
          image: '/images/password.png',
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 15,
        },
        valid: false,
        touched: false,
      },
    },
  );

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = {
      ...inputElements,
    };
    // deeper clone of login form
    const updatedFormELement = {
      ...updatedLoginForm[inputIdentifier],
    };

    updatedFormELement.value = event.target.value;
    updatedFormELement.valid = checkValidity(
      updatedFormELement.value,
      updatedFormELement.validation,
    );
    updatedFormELement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormELement;

    let valid = true;
    const keys = Object.keys(inputElements);
    const values = Object.values(inputElements);
    const areAllValid = values.filter((value) => {
      if (value.valid) {
        return true;
      }
      return false;
    });
    if (areAllValid.length === keys.length) {
      setValid(true);
    }
    console.log(areAllValid.length === keys.length);

    for (const inputIdentifiers in updatedLoginForm) {
      valid = updatedLoginForm[inputIdentifier].valid && formIsValid;
    }

    setInputElements(updatedLoginForm);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (const formElementIdentifier in inputElements) {
      formData[formElementIdentifier] = inputElements[formElementIdentifier].value;
    }

    if (formData.password === formData.passwordVerify) {
      const newUser = {
        userName: formData.Name,
        email: formData.email,
        password: formData.password,
        employeeId: 'SJV0-wdOM',
      };

      createAccount(newUser)
        .then((ok) => {
          if (ok) {
            alert('Your Signed Up, Now Login');
            history.replace('/login');
          } else {
            console.error('errored in sign up request');
          }
        });
    } else {
      console.log('Passwords do not match');
    }
  };

  // const { controls } = inputElements;
  const keys = Object.keys(inputElements);
  const values = Object.values(inputElements);

  // array of objects from controls in state
  const inputElementsArray = keys.reduce((arr, key, idx) => {
    const object = {
      id: key,
      config: values[idx],
    };
    arr.push(object);
    return arr;
  }, []);
  // redirects to login on click outside modal
  const handleClick = () => {
    history.push('/login');
  };

  const form = (
    <form name="form-signup" className={classes.Signup_Form} onSubmit={loginHandler}>
      {inputElementsArray.map((inputElement) => (
        <Input
          key={inputElement.id}
          elementType={inputElement.config.elementType}
          elementConfig={inputElement.config.elementConfig}
          value={inputElement.config.value}
          changed={(event) => inputChangedHandler(event, inputElement.id)}
          invalid={!inputElement.config.valid}
          shouldValidate={inputElement.config.validation}
          touched={inputElement.config.touched}
          label={inputElement.config.elementConfig.image}
        />
      ))}
      <button type="submit" disabled={!formIsValid}>Sign Up</button>
      <Link className={classes.Redirect} to="/login">
        Already have an account?
      </Link>
    </form>
  );

  return (
    <div>
      <Modal show={!(isLoggedIn())} modalClosed={handleClick}>
        <div className={classes.Form_Div}>
          <h1 style={{ marginBottom: '0px', marginLeft: '20px' }}>
            Create Account
          </h1>
          {form}
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;
