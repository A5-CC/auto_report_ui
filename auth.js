// auth.js
import { auth } from './firebase.js';

export function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function resetPassword(email) {
  return auth.sendPasswordResetEmail(email);
}
