import Base from './components/Base';
import HomePage from './components/HomePage';
import DashboardPage from './containers/DashboardPage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import Auth from './modules/Auth';

const routes = [
  {
    path: '/',
    component: HomePage
  }
]

export default routes;

// component: Base,
// childRoutes: [
//   {
//     path: '/',
//     getComponent: (location, callback) => {
//       if (Auth.isUserAuthenticated()) {
//         callback(null, DashboardPage);
//       } else {
//         callback(null, HomePage);
//       }
//     }
//   },
//   {
//     path: '/login',
//     component: LoginPage
//   },
//   {
//     path: '/register',
//     component: SignUpPage
//   },
//   {
//     path: '/logout',
//     onEnter: (nextState, replace) => {
//       Auth.deauthenticateUser();
//
//       // change the current URL to /
//       replace('/');
//     }
//   }
// ]
