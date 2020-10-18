import React from 'react';
// import { Input } from '../UI/Input/Input.jsx';

import classes from './Auth.css';
import Logo from '../Logo/Logo.jsx';
import Input from '../UI/Input/Input.jsx';
import Spinner from '../UI/Spinner/Spinner.jsx';

class Auth extends React.Component {
  constructor() {
    super();

    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email Address',
          },
          value: '',
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password...',
          },
          value: '',
          validation: {
            required: true,
            minLength: 7,
          },
          valid: false,
          touched: false,
        },
      },
      loading: true,
    };
  }

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { 
      ...this.state.orderForm 
    };
    // deeper clone
    const updatedFormELement = { 
      ...updatedOrderForm[inputIdentifier] 
    };
    updatedFormELement.value = event.target.value;
    updatedFormELement.valid = this.checkValidity(updatedFormELement.value, updatedFormELement.validation);
    updatedFormELement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormELement;
    console.log(updatedFormELement)
    this.setState({
      orderForm: updatedOrderForm
    });
  }


  render() {
    const { controls } = this.state;
    const keys = Object.keys(controls);
    const values = Object.values(controls);

    const formElementsArray = keys.reduce((arr, key, idx) => {
    
      const object = {
        id: key,
        config: values[idx],
      };
      arr.push(object);
      return arr;
    }, []);

    console.log(formElementsArray);
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
          />
        ))}
        {/* <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button> */}
      </form>
    );

    const { loading } = this.state;

    if (loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.Auth}>
        <div className={classes.Logo_Div}>
          <Logo />
          <span className={classes.Salty_Label}>Heron Farms</span>
        </div>
        {form}
        <div id="login">
          <form name="form-login">
            <span>
              <img
                className={classes.InputImage}
                src="/images/id-card.png"
                alt="Username"
                title="username"
              />
            </span>
            <input type="text" id="user" placeholder="Username" />
            <span>
              <img
                className={classes.InputImage}
                src="/images/password.png"
                alt="Password"
                title="password"
              />
            </span>
            <input type="password" id="password" placeholder="Password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
