import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <div>
    <form>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="password again" />
      <button type="submit">Sign Up</button>
    </form>
    signup
    <Link to="/login">Already have an account?</Link>
  </div>

);

export default SignUp;
