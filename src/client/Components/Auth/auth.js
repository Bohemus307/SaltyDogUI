// NOTE: this example keeps the access token in LocalStorage just because it's simpler
// want to use cookies instead for better security
import 'regenerator-runtime/runtime';
import jwtDecode from 'jwt-decode';

const accessTokenKey = 'accessToken';

const getUserFromToken = (token) => jwtDecode(token).sub;

export function getAccessToken() {
  return localStorage.getItem(accessTokenKey);
}

export function getLoggedInUser() {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return getUserFromToken(token);
}

export async function login(email, password) {
  const response = await fetch('http://localhost:3030/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem(accessTokenKey, token);
  }
  return response.ok;
}

export async function createAccount(user) {
  console.log('in auth',user)
  const response = await fetch('http://localhost:3030/signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ user }),
  });
  if (response.ok) {
    console.log('successful signup');
  }
  return response.ok;
}

export function isLoggedIn() {
  return !!localStorage.getItem(accessTokenKey);
}

export function logout() {
  console.log('logged out');
  localStorage.removeItem(accessTokenKey);
}
