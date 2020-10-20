import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal.jsx';

const SignUp = () => {
  const [SignedIn, setSignedIn] = useState(true);

  const form = (
    <div>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password again" />
        <button type="submit">Sign Up</button>
      </form>
      <span>Signup</span>
      <Link to="/login">Already have an account?</Link>
    </div>
  );

  return (
    <div>
      <Modal show={SignedIn} modalClosed={() => setSignedIn(false)}>
        {form}
      </Modal>
    </div>
  );
};

export default SignUp;
