class Auth {

  // Authenticate a user. Save a token string in Local Storage
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }
  // Determine if a user is authenticated by checking to see if a token saved in Local Storage
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  // Deauthenticate a user by removing his token from Local Storage.
  static deauthenticateUser() {
    return localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;
