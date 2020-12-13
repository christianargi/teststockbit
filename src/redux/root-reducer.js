import { combineReducers } from 'redux';
import App from '@iso/redux/app/reducer';
import Auth from '@iso/redux/auth/reducer';
import movies from '@iso/redux/movies/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';


export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  movies,
});
